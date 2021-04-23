
class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  // this method create a new user 
  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      admin: false,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);

    return user;
  }

  //this method finds user by id and return user id
  findById(id: string):  undefined {
    const idUser = this.users.find((user) => user.id === id);
    return idUser;
  }
 
  // this method finds the email and check if the email has already exists
  findByEmail(email: string) {
    const checkUserEmailExists = this.users.find(
      (user) => user.email === email
    );
    return checkUserEmailExists;
  }

  //this method turn the user into admin user
  turnAdmin(receivedUser ) {
    
    const userReceived = this.users.find((user) => user.id === receivedUser.id);

    Object.assign(userReceived, {
      admin: true,
      updated_at: new Date(),
    });

    return userReceived;
  }

  //this method list all users 
  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };