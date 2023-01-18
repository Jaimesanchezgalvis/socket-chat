// Descripción: Clase para manejar los usuarios
class Usuarios {
  constructor() {
    this.personas = [];
  }

  // Agregar una persona
  agregarPersona(id, nombre, sala) {
    let persona = { id, nombre, sala };
    this.personas.push(persona);
    return this.personas;
  }

  // Obtener una persona
  getPersona(id) {
    let persona = this.personas.filter((persona) => persona.id === id)[0];
    return persona;
  }

  // Obtener todas las personas
  getPersonas() {
    return this.personas;
  }

  // Obtener personas por sala
  getPersonasPorSala(sala) {
    let personasEnSala = this.personas.filter(
      (persona) => persona.sala === sala
    );
    return personasEnSala;
  }

  // Borrar una persona
  borrarPersona(id) {
    let personaBorrada = this.getPersona(id);
    this.personas = this.personas.filter((persona) => persona.id != id);
    return personaBorrada;
  }
}

module.exports = Usuarios;
