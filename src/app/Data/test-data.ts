import { User } from './../Model/user';

export class TestData {

    public getUsers(): User[] {

        const users: User[] = [];

        for (let index = 1; index < 15; index++) {
            const user: User = {
                id: index,
                fName: `First Name ${index}`,
                lName: `Last Name ${index}`,
                address: `No. ${index}, sxder Road, Calfornia - ${index}`,
                showSecoundaryAddress: false
            };
            users.push(user);
        }
        return users;
    }
}
