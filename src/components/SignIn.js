import React, { useState } from "react";
import BackButton from "./BackButton";

function SignIn() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rol, setRol] = useState("vacunador");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const userData = {
      email,
      first_name: firstName,
      last_name: lastName,
      rol,
      password,
      password2,
    };

    try {
      const response = await fetch(
        "http://13.217.181.207/api/usuarios/registro/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.status === 201) {
        alert("Cuenta creada exitosamente");
      } else {
        const errorData = await response.json();
        console.error("Respuesta de error:", errorData);
        alert("Hubo un problema al registrar el usuario");
      }
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      alert("Hubo un problema al registrar el usuario");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          margin: "20px 0px",
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "self-center",
            justifyItems: "center",
          }}
        >
          <div style={{ margin: "auto" }}>
            <BackButton />
          </div>

          <h2
            style={{
              textAlign: "center",
              color: "#126636",
              marginBottom: "30px",
              width: "100%",
            }}
          >
            Crear Cuenta
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Email"
            type="email"
            value={email}
            setValue={setEmail}
          />
          <InputField
            label="Nombre"
            type="text"
            value={firstName}
            setValue={setFirstName}
          />
          <InputField
            label="Apellido"
            type="text"
            value={lastName}
            setValue={setLastName}
          />

          <div style={fieldContainerStyle}>
            <label htmlFor="rol" style={labelStyle}>
              Rol
            </label>
            <select
              id="rol"
              value={rol}
              onChange={(e) => setRol(e.target.value)}
              style={inputStyle}
            >
              <option value="vacunador">Vacunador</option>
              <option value="admin">Administrador</option>
            </select>
          </div>

          <InputField
            label="Contraseña"
            type="password"
            value={password}
            setValue={setPassword}
          />
          <InputField
            label="Confirmar Contraseña"
            type="password"
            value={password2}
            setValue={setPassword2}
          />

          <button
            type="submit"
            style={{
              backgroundColor: "#126636",
              color: "#fff",
              padding: "12px",
              borderRadius: "6px",
              border: "none",
              fontSize: "16px",
              width: "100%",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            Crear Cuenta
          </button>
        </form>
      </div>
    </div>
  );
}

function InputField({ label, type, value, setValue }) {
  return (
    <div style={fieldContainerStyle}>
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={inputStyle}
        required
      />
    </div>
  );
}

const fieldContainerStyle = {
  marginBottom: "20px",
  display: "flex",
  flexDirection: "column",
};

const labelStyle = {
  fontSize: "14px",
  color: "#126636",
  marginBottom: "6px",
  fontWeight: "500",
};

const inputStyle = {
  padding: "10px 12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "15px",
  outline: "none",
  transition: "border-color 0.3s",
};

export default SignIn;
