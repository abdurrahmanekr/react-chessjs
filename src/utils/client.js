import io from "socket.io-client";

class Client {

    connected = false;

    connect() {
        this.socket = io.connect('http://localhost:8082');

        this.socket.on('connect', () => {
            this.connected = true;
        });
    }

    emit(...params) {
        if (!this.connected)
            return;

        this.socket.emit(...params);
    }
}

export default new Client();
