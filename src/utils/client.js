import io from "socket.io-client";

export default class Client {
    constructor() {
        this.socket = io.connect('http://localhost:8082');

        this.socket.on('connect', this.connect);
    }

    connect(res) {
        console.log('Bağlandı');
    }
}
