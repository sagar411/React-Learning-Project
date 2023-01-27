import { useState } from "react";
const UserListPage = (props) => {
    let [users, setUser] = useState(

        [{
            name: "Sagar Sunar",
            email: "sagar.sunar411@gmail.com",
            phone: 123454
        },
        {
            name: "Ajay Sunar",
            email: "ajay.sunar411@gmail.com",
            phone: 123454
        }, {
            name: "Ajay Sunar",
            email: "ajay.sunar411@gmail.com",
            phone: 123454
        }, {
            name: "Sahil",
            email: "sagh8il@gfmai;ll",
            phone: 4554
        }
        ]
    );

    return (
        <>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Static Navigation</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                    <li className="breadcrumb-item active">Static Navigation</li>
                </ol>
                <div className="card mb-4">
                    <div className="card-body">
                        <div>
                            <h1>{props.title}</h1>
                            <table className="table table-sm table-hoover table-bordered">
                                <thead className="table-dark">
                                    <tr>
                                        <td>Sn</td>
                                        <td>Name</td>
                                        <td>email</td>
                                        <td>Phone</td>
                                    </tr>
                                </thead>
                                <tbody >
                                    {
                                        users && users.map((data, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.phone}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="card mb-4"><div className="card-body">When scrolling, the navigation stays at the top of the page. This is the end of the static navigation demo.</div></div>
            </div>





        </>)

}
export default UserListPage;