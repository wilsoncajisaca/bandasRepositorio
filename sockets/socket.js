const { io } = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');

const bands = new Bands();
bands.addBand(new Band('Queen'));
bands.addBand(new Band('Nirvana'));
bands.addBand(new Band('Heroes del Silencio'));
bands.addBand(new Band('Coldplay'));
bands.addBand(new Band('Bon Jovi'));

console.log(bands);

//Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente Conectado');

    client.emit('active-bands', bands.getBands());

    client.on('disconnect', () => {
        console.log('Cliente Desconectado');
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje!!', payload);

        io.emit('mensaje', { admin: 'Nuevo Mensaje' });
    });

    client.on('vote-band', function(body) {
        bands.voteBand(body.id);
        io.emit('active-bands', bands.getBands());
    });

    client.on('add-band', function(body) {
        const newBand = new Band(body.name);
        bands.addBand(newBand);
        io.emit('active-bands', bands.getBands());
    });

    client.on('delete-band', function(body) {
        bands.delete(body.id);
        io.emit('active-bands', bands.getBands());
    });

    // client.on('emitir-mensaje', (payload) => {
    //     client.broadcast.emit('nuevo-mensaje', payload);
    // });
});