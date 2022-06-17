const exercicio1 = () =>{
    type Person = {id:number | number , 
        name:string , 
        age: number | undefined, 
        email:string, 
        password:string, 
        role: AdminAccount| NormalAccount }

    }
    type AdminAccount = {
        account:"Admin",
        permission: true
    }
    type NormalAccount = {
        account:"Normal",
        permission: false
    }
enum UserResponse {
    No = 0,
    Yes = 1,
    }
    
    function respond(recipient: string, message: UserResponse): void {
    console.log(recipient, message)
    }
    
    respond("Princess Caroline", UserResponse.No);