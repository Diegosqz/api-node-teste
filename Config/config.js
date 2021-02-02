const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env){
        case 'dev':
            return {
                bd_string: 'mongodb+srv://usuario_admin:senhaqualquer@clusteapitest.westn.mongodb.net/<dbname>?retryWrites=true&w=majority'
                jwt_pass: 'batatafrita2021',
                jwt_expires_in: '1d'
                }
            case 'hml':
                return{
                    bd_string: 'mongodb+srv://usuario_admin:senhaqualquer@clusteapitest.westn.mongodb.net/<dbname>?retryWrites=true&w=majority'
                    jwt_pass: 'batatafrita2021',
                    jwt_expires_in: '1d'
    
                }

                case 'prod':
                    return{
                        bd_string: 'mongodb+srv://usuario_admin:senhaqualquer@clusteapitest.westn.mongodb.net/<dbname>?retryWrites=true&w=majority'
                        jwt_pass: 'batatafrita2021',
                        jwt_expires_in: '1d'
        
                    }
    }
}
console.log('Iniciando a API em ambiente ${env.toUpperCase()}')
module.exports = config();




// "set NODE_ENV=''"