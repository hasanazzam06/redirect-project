
const addPath = (pathLink) => async (request, h) => {
      const { path, url } = request.payload;

        console.log(path);
        console.log(url);     

        if (!path || !url) {
        return h.response({ message: 'Query path dan url wajib diisi' }).code(400);
        }

        const existing = await pathLink.find({ path }).toArray();
        if (existing.length > 0) {
        return h.response({ message: 'Path sudah ada' }).code(400);
        }

        await pathLink.insertOne({ path, url });
        return h.response({ message: 'Path berhasil ditambahkan' }).code(201);
};

const redirectPath = (pathLink) => async (request, h) => {
    const { target } = request.params;

    const existing = await pathLink.find({ path: target }).toArray();
    if (existing.length > 0) {
    return h.redirect(existing[0].url).code(302);
    }

    return `tidak ada link dengan path ${target}`;
}

const deletePath = (pathLink) => async (request, h) => {
    const { path } = request.query;

    if (!path) {
        return h.response({ message: 'Query "path" wajib diisi' }).code(400);
    }

    const result = await pathLink.deleteOne({ path });

    if (result.deletedCount === 0) {
        return h.response({ message: `Path "${path}" tidak ditemukan.` }).code(404);
    }

    return h.response({ message: `Path "${path}" berhasil dihapus.` }).code(200);
}

module.exports= { addPath, redirectPath, deletePath };