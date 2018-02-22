import { Model } from 'objection'
import Knex from 'knex' 

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'username', 
        'firstname', 
        'lastname', 
        'email', 
        'password'
      ],

      properties: {
        id: { type: 'integer' },
        username: { type: 'string', minLength: 1, maxLength: 255 },
        lastname: { type: 'string', minLength: 1, maxLength: 255 },
        firstname: { type: 'string', minLength: 1, maxLength: 255 },
        password: { type: 'string', minLength: 1 },
        email: { type: 'string', minLength: 1, maxLength: 255 },
      }
    }
  }

  static get relationMappings() {
    return {}
  }

}

export default User