export class LoginService {
    async login(username: string, password: string): Promise<boolean> {
        // Simulate API call
        return Promise.resolve(username === "testUser" && password === "password123");
    }

    getWelcomeMessage(username: string): string {
        return `Welcome back, ${username}!`;
    }
}