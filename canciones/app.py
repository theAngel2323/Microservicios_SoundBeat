import json
from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/canciones')
def get_canciones():
    # Llama al servicio de usuarios por su nombre de servicio en Compose
    usuarios = requests.get("http://usuarios:3001/usuarios", timeout=3).json()

    with open ("canciones.json", "r") as archivo:
        datos = json.load(archivo)

        return jsonify(datos)


if __name__ == '__main__':
    # 0.0.0.0 para aceptar conexiones desde fuera del contenedor
    app.run(host='0.0.0.0', port=3002)
