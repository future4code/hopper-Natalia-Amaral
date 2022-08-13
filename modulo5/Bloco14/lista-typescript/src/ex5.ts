enum ROLE{
    USER="user",
    ADMIN="admin"
}
type Pessoas ={
    name: string;
    email: string;
    role: ROLE;
}
const Usuarios:Array<Pessoas>= [
	{name: "Rogério", email: "roger@email.com", role:ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
] 



function retornaAdmin (Usuarios:Array<Pessoas>):Array<string>{
    return Usuarios.filter((usuario)=>{
        return usuario.role === ROLE.ADMIN
    })
    .map((item)=>{
        return item.email
    })

}
console.log (retornaAdmin(Usuarios))