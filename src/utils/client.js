import io from "socket.io-client";

class Client {

    connected = false;

    connect() {
        if (this.connected === true)
            return;
        this.socket = io.connect('http://127.0.0.1:8082');

        this.socket.on('connect', () => {
            this.connected = true;
        });
        this.socket.on('disconnect', (err) => {
            this.connected = false;
        });
    }

    on(...params) {
        if (!this.connected)
            return;

        this.socket.on(...params);
    }

    off(...params) {
        if (!this.connected)
            return;

        this.socket.off(...params);
    }

    emit(...params) {
        if (!this.connected)
            return;

        this.socket.emit(...params);
    }
}

export default new Client();
