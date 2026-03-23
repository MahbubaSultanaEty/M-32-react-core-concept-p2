import { use } from "react";
export default function Users({ fetchUsers }) {
    const users = use(fetchUsers);
    console.log(users)
    return (
        <div className="users">
            <h3>Users: { users.length}</h3>
         </div>
    )
}


/* use Hook (React)
 use হলো React এর একটি experimental hook
 এটি Promise (async data) থেকে সরাসরি value বের করতে use হয়.

 What it does:
• Promise resolve হওয়া পর্যন্ত wait করে
• resolve হলে data return করে
• async code কে synchronous এর মতো readable করে

Where it's used:
• Server Components
• Suspense এর সাথে
 */