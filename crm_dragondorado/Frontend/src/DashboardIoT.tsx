import React, { useState, useEffect } from 'react';

const DashboardIoT = () => {
  const [temperatura, setTemperatura] = useState(2.5);
  const [motosActivas, setMotosActivas] = useState(4);

  // Simulación de datos de 10 mesas
  const [mesas, setMesas] = useState([
    { id: 1, estado: 'Consumiendo', pedido: '4 Chaufas de Pollo, 2 Inka Kola 1L' },
    { id: 2, estado: 'Disponible', pedido: '' },
    { id: 3, estado: 'Pagado', pedido: '2 Tallarín Saltado, 1 Limonada' },
    { id: 4, estado: 'Consumiendo', pedido: '1 Aeropuerto, 1 Sopa Wantán' },
    { id: 5, estado: 'Disponible', pedido: '' },
    { id: 6, estado: 'Consumiendo', pedido: '3 Pollo Chi Jau Kay, 3 Chicha Morada' },
    { id: 7, estado: 'Pagado', pedido: '1 Arroz Chaufa Especial, 1 Té Jazmín' },
    { id: 8, estado: 'Disponible', pedido: '' },
    { id: 9, estado: 'Consumiendo', pedido: '2 Chancho al Ajo, 2 Gaseosas' },
    { id: 10, estado: 'Disponible', pedido: '' },
  ]);

  useEffect(() => {
    const intervaloTemp = setInterval(() => {
      setTemperatura(Number((Math.random() * (4.5 - 2) + 2).toFixed(1)));
    }, 5000);
    return () => clearInterval(intervaloTemp);
  }, []);

  useEffect(() => {
    const intervaloMesas = setInterval(() => {
      setMesas(prevMesas => 
        prevMesas.map(mesa => {
          if (mesa.estado === 'Pagado') {
            return { ...mesa, estado: 'Disponible', pedido: '' };
          }
          return mesa;
        })
      );
    }, 10000);
    return () => clearInterval(intervaloMesas);
  }, []);

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'Disponible': return 'rgba(240, 253, 244, 0.85)'; 
      case 'Consumiendo': return 'rgba(255, 251, 235, 0.85)'; 
      case 'Pagado': return 'rgba(239, 246, 255, 0.85)'; 
      default: return 'rgba(255, 255, 255, 0.85)';
    }
  };

  const getBordeColor = (estado: string) => {
    switch (estado) {
      case 'Disponible': return '#22c55e';
      case 'Consumiendo': return '#d4af37';
      case 'Pagado': return '#3b82f6';
      default: return '#e5e7eb';
    }
  };

  return (
    <div style={{ 
      padding: '40px', 
      fontFamily: '"Times New Roman", Times, serif', 
      backgroundColor: '#f5f1e7',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      minHeight: '100vh',
      color: '#333'
    }}>
      
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '15px',
        padding: '30px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.05)'
      }}>

        {/* HEADER CON LOGO AL COSTADO DEL TEXTO */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          borderBottom: '3px solid #d4af37', 
          paddingBottom: '15px',
          marginBottom: '35px'
        }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {/* LOGO PEQUEÑO ALINEADO CON EL TÍTULO */}
            <div style={{ 
              width: '50px',         
              height: '50px',        
              minWidth: '50px',      
              minHeight: '50px',     
              flexShrink: 0,         
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid #d4af37',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              backgroundColor: '#000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img 
                src="/image_981a19.png" 
                alt="Logo Dragón" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            
            <h1 style={{ color: '#8b0000', margin: 0, fontSize: '2.5rem', letterSpacing: '1px', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
              RESTAURANTE DRAGÓN DORADO
            </h1>
          </div>
          
          {/* SUBTÍTULO DEBAJO DEL LOGO Y EL TÍTULO */}
          <h2 style={{ color: '#b8860b', margin: '8px 0 0 65px', fontSize: '1.2rem', fontWeight: 'bold', fontStyle: 'italic' }}>
            Panel de Monitoreo Inteligente & Gestión IoT
          </h2>
        </div>
        
        {/* SECCIÓN DE SENSORES IOT */}
        <div style={{ display: 'flex', gap: '30px', marginBottom: '45px' }}>
          <div style={{ 
            padding: '25px 30px', 
            border: '1px solid #e5e7eb', 
            borderTop: `6px solid ${temperatura > 4.0 ? '#dc2626' : '#8b0000'}`,
            borderRadius: '12px',
            backgroundColor: '#fff',
            flex: 1,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#444', fontSize: '1.4rem' }}>
              🌡️ Sensor de Temperatura (DS18B20)
            </h3>
            <p style={{ margin: 0, color: '#777', fontStyle: 'italic', fontSize: '1.1rem' }}>Ubicación: Cámara Frigorífica de Mariscos</p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '20px' }}>
              <h1 style={{ color: temperatura > 4.0 ? '#dc2626' : '#8b0000', fontSize: '4rem', margin: 0, textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                {temperatura}°C
              </h1>
              {temperatura > 4.0 && (
                <span style={{ backgroundColor: '#fee2e2', color: '#dc2626', padding: '8px 15px', borderRadius: '30px', fontWeight: 'bold', fontSize: '1rem', border: '1px solid #f87171' }}>
                  ⚠️ ALERTA: CADENA DE FRÍO ROTA
                </span>
              )}
            </div>
          </div>

          <div style={{ 
            padding: '25px 30px', 
            border: '1px solid #e5e7eb', 
            borderTop: '6px solid #d4af37',
            borderRadius: '12px', 
            flex: 1,
            backgroundColor: '#fff',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#444', fontSize: '1.4rem' }}>
              🛵 Módulos GPS Tracker (ESP32)
            </h3>
            <p style={{ margin: 0, color: '#777', fontStyle: 'italic', fontSize: '1.1rem' }}>Ubicación: Flota de Delivery</p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '25px', marginTop: '20px' }}>
              <h1 style={{ color: '#b8860b', fontSize: '4.5rem', margin: 0, lineHeight: '1' }}>
                {motosActivas}
              </h1>
              <div>
                <p style={{ margin: '0 0 8px 0', fontWeight: 'bold', color: '#333', fontSize: '1.3rem' }}>Motos en ruta</p>
                <p style={{ margin: 0, color: '#666', fontSize: '1.1rem' }}>ETA Promedio: <span style={{color: '#22c55e', fontWeight: 'bold'}}>25 min</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN DE MESAS */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '2px solid #8b0000', paddingBottom: '12px', marginBottom: '25px' }}>
          <h3 style={{ color: '#8b0000', margin: 0, fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            🍽️ Estado de Mesas en Tiempo Real
          </h3>
          
          <div style={{ display: 'flex', gap: '25px', fontSize: '1.1rem', fontStyle: 'italic', backgroundColor: '#f9fafb', padding: '8px 15px', borderRadius: '20px', border: '1px solid #e5e7eb' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#166534', fontWeight: 'bold' }}>
              <div style={{ width: '14px', height: '14px', backgroundColor: '#22c55e', borderRadius: '50%', boxShadow: '0 0 5px rgba(34,197,94,0.5)' }}></div> Disponible
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#854d0e', fontWeight: 'bold' }}>
              <div style={{ width: '14px', height: '14px', backgroundColor: '#d4af37', borderRadius: '50%', boxShadow: '0 0 5px rgba(212,175,55,0.5)' }}></div> Consumiendo
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1e40af', fontWeight: 'bold' }}>
              <div style={{ width: '14px', height: '14px', backgroundColor: '#3b82f6', borderRadius: '50%', boxShadow: '0 0 5px rgba(59,130,246,0.5)' }}></div> Pagado (Limpiando)
            </span>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '25px' 
        }}>
          {mesas.map((mesa) => (
            <div key={mesa.id} style={{
              padding: '22px',
              border: `1px solid ${getBordeColor(mesa.estado)}`,
              borderLeft: `8px solid ${getBordeColor(mesa.estado)}`,
              borderRadius: '10px',
              backgroundColor: getEstadoColor(mesa.estado),
              boxShadow: '0 8px 15px rgba(0,0,0,0.06)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', position: 'relative', zIndex: 1 }}>
                <h4 style={{ margin: 0, fontSize: '1.6rem', color: '#222' }}>Mesa {mesa.id}</h4>
                <span style={{ 
                  fontSize: '0.9rem', 
                  fontWeight: 'bold', 
                  padding: '5px 12px', 
                  borderRadius: '20px',
                  backgroundColor: 'white',
                  color: getBordeColor(mesa.estado),
                  border: `1px solid ${getBordeColor(mesa.estado)}`,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  letterSpacing: '0.5px'
                }}>
                  {mesa.estado.toUpperCase()}
                </span>
              </div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                {mesa.pedido ? (
                  <div style={{ fontSize: '1.1rem', color: '#4b5563' }}>
                    <strong style={{ display: 'block', marginBottom: '8px', color: '#8b0000', fontSize: '1.05rem' }}>Comanda Activa:</strong>
                    <p style={{ margin: 0, lineHeight: '1.6', fontStyle: 'italic', fontWeight: '500' }}>"{mesa.pedido}"</p>
                  </div>
                ) : (
                  <div style={{ fontSize: '1.1rem', color: '#9ca3af', fontStyle: 'italic', textAlign: 'center', padding: '20px 0' }}>
                    Esperando comensales...
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardIoT;