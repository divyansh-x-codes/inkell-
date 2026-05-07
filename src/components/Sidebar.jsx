import React from 'react';

const Sidebar = () => {
    const menuItems = [
        { icon: 'ti-home', label: 'Home', active: true },
        { icon: 'ti-bookmark', label: 'Library' },
        { icon: 'ti-user', label: 'Profile' },
        { icon: 'ti-file-text', label: 'Stories' },
        { icon: 'ti-chart-bar', label: 'Stats' },
    ];

    return (
        <aside className="sidebar">
            {/* Menu Items */}
            {menuItems.map((item, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '15px',
                        color: item.active ? '#242424' : '#6b6b6b',
                        backgroundColor: item.active ? '#f2f2f2' : 'transparent',
                        transition: 'background 0.2s',
                        marginBottom: '4px'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f2f2f2'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = item.active ? '#f2f2f2' : 'transparent'}
                >
                    <i className={`ti ${item.icon}`} style={{ fontSize: '20px' }}></i>
                    <span>{item.label}</span>
                </div>
            ))}

            {/* Following Section */}
            <div style={{
                fontSize: '11px',
                color: '#aaa',
                padding: '24px 14px 8px',
                fontWeight: '600',
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
            }}>
                Following
            </div>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '9px',
                padding: '8px 14px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                color: '#6b6b6b'
            }}>
                <div style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    backgroundColor: '#c8944a',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    fontWeight: '700'
                }}>T</div>
                <span>The Useful Life</span>
                <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#1a8917',
                    marginLeft: 'auto'
                }}></div>
            </div>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '9px',
                padding: '8px 14px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                color: '#6b6b6b'
            }}>
                <div style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    backgroundColor: '#1a8917',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    fontWeight: '700'
                }}>S</div>
                <span>Shivanjali Verma</span>
            </div>

            {/* Discover Section */}
            <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '9px',
                padding: '16px 14px',
                fontSize: '13px',
                color: '#6b6b6b',
                lineHeight: '1.4'
            }}>
                <i className="ti ti-plus" style={{ fontSize: '16px', marginTop: '2px' }}></i>
                <span>Find writers and publications to follow.</span>
            </div>

            <div style={{
                fontSize: '13px',
                color: '#1a8917',
                padding: '0 14px',
                cursor: 'pointer',
                fontWeight: '500'
            }}
                onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
                See suggestions
            </div>
        </aside>
    );
};

export default Sidebar;