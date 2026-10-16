import { Head } from "@inertiajs/react";
// import { PlaceholderPattern } from "@/components/ui/placeholder-pattern";
import { dashboard } from "@/routes";
type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    e_url: string;
    d_url: string;
};
interface Props {
    users: {
        data: User[];
    };
    filter: {
        search: string;
    };
    c_url: string;
}

export default function UserIndex({ users }: Props) {
    return (
        <>
            <Head title="Users Management" />
            <div>
            <h1>Daftar User</h1>
            {users.data.map((user) => (
            <div key={user.id}>
            {user.name}</div>
            ))}
            </div>
        </>
    );
}

UserIndex.layout = {
    breadcrumbs: [
        {
            title: "User Management ",
            href: dashboard(),
        },
    ],
};