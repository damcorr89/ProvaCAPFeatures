const { uuid } = cds.utils 

const getProva = async (req) => {
    // const results = await cds.run('SELECT * FROM MYSERVICE_PROVA')
    const results = await SELECT .from `MYSERVICE_PROVA`.where({name: `Mario`, 
                                                                or: {
                                                                   name: {
                                                                            like:'%Pea%'
                                                                    }
                                                                }
                                                                })
    console.log("ciao ciao")
    return results
}

const insertMassiveBooks = async (req) => {
    const { Book } = cds.entities
    let queryInserts
    try {
        queryInserts = await INSERT.into (
            Book,
            req.data.books.map(it => { return {id: uuid(), title: it.title, author_id: it.author_id}})
        )
    } catch (error) {
        throw req.error(error.response.status, JSON.stringify(error.response.message))  
    }
    return {
        books: queryInserts.req.data,
        message: "Tutto okappa!"
    }
}

module.exports = { getProva, insertMassiveBooks }