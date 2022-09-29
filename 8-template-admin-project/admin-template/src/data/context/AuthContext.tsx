import route from 'next/router'
import { createContext, useEffect, useState } from "react"
import firebase from "../../firebase/config"
import Usuario from "../../model/Usuario"
import Cookies from 'js-cookie'

interface AuthContextProps{
    usuario?: Usuario
    carregando?: boolean
    loginGoogle?: () => Promise<void>
    login?: (email: string, senha: string) => Promise<void>
    cadastrar?: (email: string, senha: string) => Promise<void>
    logout?: () => Promise<void>
    
}

const AuthContext = createContext<AuthContextProps>({})

//normalizar dados do usuário, retornar objeto usuario com seus dados
async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario>{
    const token = await usuarioFirebase.getIdToken()
    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoURL,
    }
}

//criar e remover cookie quando usuário loga ou desloga
function gerenciarCookie(logado: boolean){
    if(logado){
        Cookies.set('admin-template-igordev-auth', logado, {
            expires: 7
        })
    } else {
        Cookies.remove('admin-template-igordev-auth')
    }
}

//Provedor de autenticação do firebase
export function AuthProvider(props){

    const [usuario, setUsuario] = useState<Usuario>(null)
    const [carregando, setCarregando] = useState(true)
    
    // configurar sessão de cookie, carregamento e usuário após logar
    async function configurarSessao(usuarioFirebase){
        if(usuarioFirebase?.email){
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookie(true)
            setCarregando(false)
            return usuario.email
        } else{
            setUsuario(null)
            gerenciarCookie(false)
            setCarregando(false)
            return false
        }
    }
    
    // login com o google no firebase
    async function login(email, senha) {
        
        try{
            setCarregando(true)            
            const resp = await firebase.auth().signInWithEmailAndPassword(email,senha)
        
            await configurarSessao(resp.user)
            route.push('/')
            
        } finally{
            setCarregando(false)
        }            
    }
    
      // login com o google no firebase
    async function cadastrar(email, senha) {
        
        try{
            setCarregando(true)            
            const resp = await firebase.auth().createUserWithEmailAndPassword(email,senha)
        
            await configurarSessao(resp.user)
            route.push('/')
            
        } finally{
            setCarregando(false)
        }            
    }
    
    // login com o google no firebase
    async function loginGoogle() {
        
        try{
            setCarregando(true)            
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
        
            await configurarSessao(resp.user)
            route.push('/')
            
        } finally{
            setCarregando(false)
        }            
    }
    
    //deslogar do firebase
    async function logout(){        
        try{
            setCarregando(true)
            await firebase.auth().signOut()
            await configurarSessao(null)
            route.push('/')
        } finally{
            setCarregando(false)         
        }
    }
    
    useEffect(() => {
        if(Cookies.get('admin-template-igordev-auth')){
            //quando ocorrer uma mudança no token do usuário, configurar a sessão
            const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
            return () => cancelar()
        } else {
            setCarregando(false)
        }  
    }, [])
        
    return(
        <AuthContext.Provider value={{
            usuario,
            carregando,
            login,
            cadastrar,
            loginGoogle,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext