import io from "socket.io-client";

class Client {

    connected = false;

    connect() {
        this.socket = io.connect('http://localhost:8082', {
            query: 'name=abdurrahman',
        });

        this.socket.on('connect', () => {
            this.connected = true;
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
