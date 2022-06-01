type usuarios = {name:string, email:string, role:ROLE}
enum ROLE {ADMIN = 'admin', USER = 'user'}
const emails:usuarios[] =  [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
] 

function isAdmin(i:usuarios){
    return i.role === ROLE.ADMIN
}
let admins:usuarios[] = emails.filter(isAdmin)
console.log(admins)
