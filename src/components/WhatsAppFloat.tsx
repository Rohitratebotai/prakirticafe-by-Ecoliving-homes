import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat: React.FC = () => {
    const phoneNumber = "919650848061"; // include country code without +
    const message = "Hello! I would like more information.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: "fixed",
                bottom: "20px",
                left: "20px",
                backgroundColor: "#25D366",
                color: "white",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                textDecoration: "none",
                boxShadow: "2px 2px 10px rgba(0,0,0,0.3)",
                zIndex: 1000,
            }}
        >
            <FaWhatsapp />
        </a>
    );
};

export default WhatsAppFloat;