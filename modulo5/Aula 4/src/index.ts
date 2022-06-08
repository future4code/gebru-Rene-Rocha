import express from "express";
import cors from "cors"
import { Request, Response } from "express";
import { users } from "./data";

const app = express() //agora temos todas as funcionalidades do express
app.use(express.json()) // vamos trocar informações atraves do formato json
app.use(cors()) //habilita o cors

//endpoint
app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Deu certo")
})

app.post('/cadastro/:nome', (req: Request, res: Response) => {

    console.log("req.body", req.body.nome)
    console.log("req.query", req.query)
    console.log("req.headers", req.headers)
    console.log("req.params", req.params)

    res.status(200).send("Usuario cadastrado com sucesso")
})

// -------Exercício -----

app.get('/playlists', (req: Request, res: Response) => {

    try {

        const listaUsuarios = users

        const userPlaylist = listaUsuarios.map((cadaUsuario) => {
            return cadaUsuario.playlists
        })

        const result = userPlaylist.flat(1)

        res.status(200).send(result)

    }
    catch (error) {
        res.status(400).end("Playlists não encontradas")
    }
})


app.get('/tracks', (req: Request, res: Response) => {

    try {
        console.log(req.query)

        const playlistId = req.query.id
        let playTracks: {}[] = []

        for (let element of users) {
            for (let playlist of element.playlists) {
                if (playlist.id === playlistId) {
                    playTracks.push(playlist.tracks)
                }
            }
        }

        res.status(200).send(playTracks)

    }
    catch (error) {
        res.status(400).end("Id não encontrado")
    }
})


app.delete('/playlist/:id', (req: Request, res: Response) => {
    try {

        const id = req.params.id

        for (let element of users) {
            let index = element.playlists.findIndex((playlist) => playlist.id === id)

            if (index > -1) {
                element.playlists.splice(index, 1)
            }

        }

        res.status(200).send("Playlist deletada")

    }
    catch (error) {
        res.status(400).end("Playlist não encontrada, por favor verifique o id")
    }
})

app.delete('/track', (req: Request, res: Response) => {
    try {

        const trackId = req.query.idTrack
        const playlistId = req.query.idPlaylist

        //-----Resolução 1-----

        // const allPlaylists = users.map((user)=>{
        //     return user.playlists
        // }).flat(1)

        // allPlaylists.forEach((playlist)=>{
        //     if(playlist.id === playlistId){
        //         playlist.tracks = playlist.tracks.map((track: any)=>{
        //             if(track.id === trackId){
        //                 return{}
        //             }
        //             return track
        //         })
        //     } 
        // })


        //-----Resolução 2-----

        for(let element of users){
            for(let playlist of element.playlists){
                if(playlist.id === playlistId){
                    let index = playlist.tracks.findIndex((track)=>track.id === trackId)
                    if(index > -1) {
                        playlist.tracks.splice(index, 1)
                    }
                }
            }
        }

        res.status(200).send("Música deletada")

    }
    catch (error) {
        res.status(400).end("Playlist não encontrada, por favor verifique o id")
    }
})

app.listen(3003, () => {
    console.log("Servidor de pé")
})

