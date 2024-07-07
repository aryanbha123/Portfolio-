import React from 'react'

export default function Loader() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', position: 'fixed', top: '0', left:"0" , zIndex: '999', height: "100vh", width: "100vw" }}>
                <div className="loader"></div>
            </div>
        </div>
    )
}
