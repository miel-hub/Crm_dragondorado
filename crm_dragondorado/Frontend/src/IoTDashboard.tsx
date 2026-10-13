import { useState, useEffect } from 'react';

export default function IoTDashboard() {
  const [datos, setDatos] = useState({
    cocina: { gas_ppm: 135, temperatura: 31.5, extractor: "ENCENDIDO" },
    frio: { temp_mariscos: -14.2, temp_carnes: 2.8, puerta: "CERRADA" },
    insumos: { arroz_kg: 38.5, sillao_litros: 2.4 },
    mesas: [
      { id: 1, estado: "LIBRE", alerta: "Ninguna", hora: "-" },
      { id: 2, estado: "OCUPADA", alerta: "Ninguna", hora: "12:15 PM" },
      { id: 3, estado: "ATENCION", alerta: "💳 Pide la Cuenta", hora: "12:28 PM" },
      { id: 4, estado: "OCUPADA", alerta: "Ninguna", hora: "12:20 PM" }
    ],
    historial: [
      "[12:28 PM] 🔔 Mesa 03 presionó botón físico: Pedir la Cuenta.",
      "[12:10 PM] ⚠️ Alerta Stock: Bidón de Sillao al 12% (2.4 L)."
    ]
  });

  const [mesaSeleccionada, setMesaSeleccionada] = useState<number>(1);

  const cargarDatos = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/iot/estado');
      if (res.ok) {
        const data = await res.json();
        setDatos(data);
      }
    } catch (e) {
      // Usa estado local si el backend no responde
    }
  };

  useEffect(() => {
    cargarDatos();
    const intervalo = setInterval(cargarDatos, 3000);
    return () => clearInterval(intervalo);
  }, []);

  const presionarBotonMesa = async (mesa_id: number, accion: string) => {
    const horaActual = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setDatos(prev => {
      const nuevasMesas = prev.mesas.map(m => {
        if (m.id === Number(mesa_id)) {
          return accion === "LIBERAR"
            ? { ...m, estado: "LIBRE", alerta: "Ninguna", hora: "-" }
            : { ...m, estado: "ATENCION", alerta: accion, hora: horaActual };
        }
        return m;
      });
      const nuevoLog = accion === "LIBERAR"
        ? `[${horaActual}] ✅ Mozo atendió y liberó la alerta de la Mesa 0${mesa_id}`
        : `[${horaActual}] 🔔 Mesa 0${mesa_id} presionó botón IoT: ${accion}`;

      return { ...prev, mesas: nuevasMesas, historial: [nuevoLog, ...prev.historial] };
    });

    try {
      await fetch('http://localhost:3000/api/iot/mesa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mesa_id, accion })
      });
    } catch (err) {}
  };

  return (
    <div style={{ padding: '24px', backgroundColor: '#1a0f0f', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #d4af37', paddingBottom: '12px', marginBottom: '20px' }}>
        <h1 style={{ color: '#d4af37', margin: 0 }}>🐉 Chifa Dragón Dorado - Centro de Control IoT</h1>
        <span style={{ backgroundColor: '#166534', padding: '6px 14px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold' }}>
          🟢 Nodos ESP32 Conectados (Wi-Fi)
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div style={{ backgroundColor: '#2a1818', padding: '16px', borderRadius: '10px', borderLeft: '5px solid #22c55e' }}>
          <h3 style={{ color: '#d4af37', marginTop: 0 }}>🔥 Seguridad en Cocina (Woks)</h3>
          <p><strong>Sensor Gas GLP (MQ-2):</strong> {datos.cocina.gas_ppm} ppm (Normal)</p>
          <p><strong>Temp. Ambiente (DHT22):</strong> {datos.cocina.temperatura} °C</p>
          <p><strong>Extractor Humo:</strong> {datos.cocina.extractor}</p>
        </div>

        <div style={{ backgroundColor: '#2a1818', padding: '16px', borderRadius: '10px', borderLeft: '5px solid #38bdf8' }}>
          <h3 style={{ color: '#d4af37', marginTop: 0 }}>❄️ Cadena de Frío (DS18B20)</h3>
          <p><strong>Congeladora Mariscos:</strong> {datos.frio.temp_mariscos} °C 🟢</p>
          <p><strong>Cámara Carnes/Pollo:</strong> {datos.frio.temp_carnes} °C 🟢</p>
          <p><strong>Sensor Puerta (Reed):</strong> {datos.frio.puerta} 🔒</p>
        </div>

        <div style={{ backgroundColor: '#2a1818', padding: '16px', borderRadius: '10px', borderLeft: '5px solid #eab308' }}>
          <h3 style={{ color: '#d4af37', marginTop: 0 }}>⚖️ Balanzas de Insumos (HX711)</h3>
          <p><strong>🍚 Saco de Arroz (50kg):</strong> {datos.insumos.arroz_kg} kg (77%)</p>
          <div style={{ background: '#444', height: '10px', borderRadius: '5px', marginBottom: '10px' }}>
            <div style={{ background: '#22c55e', width: '77%', height: '10px', borderRadius: '5px' }}></div>
          </div>
          <p><strong>🍾 Bidón Sillao (20L):</strong> {datos.insumos.sillao_litros} L (12%) ⚠️ <em>Reponer</em></p>
          <div style={{ background: '#444', height: '10px', borderRadius: '5px' }}>
            <div style={{ background: '#ef4444', width: '12%', height: '10px', borderRadius: '5px' }}></div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        <div style={{ backgroundColor: '#2a1818', padding: '20px', borderRadius: '10px', border: '1px solid #d4af37' }}>
          <h2 style={{ color: '#d4af37', marginTop: 0 }}>🛎️ Monitoreo de Mesas Inteligentes en Salón</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
            {datos.mesas.map(mesa => (
              <div key={mesa.id} style={{
                padding: '16px',
                borderRadius: '8px',
                backgroundColor: mesa.estado === 'ATENCION' ? '#7f1d1d' : mesa.estado === 'OCUPADA' ? '#3f2e1e' : '#143321',
                border: mesa.estado === 'ATENCION' ? '2px solid #ef4444' : '1px solid #555'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: 0 }}>Mesa 0{mesa.id}</h3>
                  <span style={{ fontWeight: 'bold' }}>
                    {mesa.estado === 'ATENCION' ? '🔴 SOLICITA ATENCIÓN' : mesa.estado === 'OCUPADA' ? '🟡 OCUPADA' : '🟢 LIBRE'}
                  </span>
                </div>
                <p style={{ margin: '10px 0 4px' }}><strong>Acción IoT:</strong> {mesa.alerta}</p>
                <p style={{ margin: 0, fontSize: '13px', color: '#ccc' }}>Hora señal: {mesa.hora}</p>
                {mesa.estado === 'ATENCION' && (
                  <button
                    onClick={() => presionarBotonMesa(mesa.id, 'LIBERAR')}
                    style={{ marginTop: '10px', padding: '6px 12px', backgroundColor: '#22c55e', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    ✅ Marcar como Atendida
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: '#2a1818', padding: '20px', borderRadius: '10px', border: '2px dashed #d4af37', textAlign: 'center' }}>
          <h3 style={{ color: '#d4af37', marginTop: 0 }}>📱 Simulador Dispositivo IoT en Mesa (ESP32 + NFC)</h3>
          <p style={{ fontSize: '13px', color: '#ddd' }}>Prueba presionar un botón como si fueras el cliente en la mesa:</p>

          <select
            value={mesaSeleccionada}
            onChange={(e) => setMesaSeleccionada(Number(e.target.value))}
            style={{ padding: '8px', width: '100%', marginBottom: '14px', borderRadius: '5px', fontWeight: 'bold', color: '#000' }}
          >
            <option value={1}>Dispositivo de Mesa 01</option>
            <option value={2}>Dispositivo de Mesa 02</option>
            <option value={3}>Dispositivo de Mesa 03</option>
            <option value={4}>Dispositivo de Mesa 04</option>
          </select>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button onClick={() => presionarBotonMesa(mesaSeleccionada, '🛎️ Llamar al Mozo')} style={{ padding: '12px', backgroundColor: '#eab308', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
              🛎️ Botón 1: Llamar al Mozo
            </button>
            <button onClick={() => presionarBotonMesa(mesaSeleccionada, '🥢 Más Sillao / Té Jazmín')} style={{ padding: '12px', backgroundColor: '#f97316', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
              🥢 Botón 2: Pedir Sillao / Té
            </button>
            <button onClick={() => presionarBotonMesa(mesaSeleccionada, '💳 Pide la Cuenta')} style={{ padding: '12px', backgroundColor: '#ef4444', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
              💳 Botón 3: Pedir la Cuenta
            </button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#2a1818', padding: '16px', borderRadius: '10px' }}>
        <h3 style={{ color: '#d4af37', marginTop: 0 }}>📈 Registro de Señales IoT en Tiempo Real</h3>
        {datos.historial.slice(0, 5).map((item, idx) => (
          <div key={idx} style={{ padding: '6px 0', borderBottom: '1px solid #3a2525', fontSize: '14px' }}>{item}</div>
        ))}
      </div>
    </div>
  );
}