import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Trash2, Shield, Ban } from "lucide-react";
import { toast, Toaster } from "sonner";
import { BASE_URL } from "@/utils/constants";


export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch users
  const fetchUsers = async() => {
    try{
      setLoading(true)
      const res = await axios.get(BASE_URL+"/admin/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      setUsers(res.data.users)
    }catch(err){
      console.error(err)
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])
  

  // Change Role
  const handleRoleChange = async (id, role, name) => {
    try{
      await axios.put(`${BASE_URL}/admin/user/${id}/role`, {role}, {
        headers : {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      toast.success(`${name} role changed to ${role} successfully`);
      fetchUsers()
    } catch(err){
      console.error(err)
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  }

  // Block / Unblock
  const handleStatusChange = async (id, status) => {
    
  };

  // Delete User


  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">User Management</h1>

      <Card className="shadow-xl rounded-2xl">
        <CardContent className="p-4">
          {loading ? (
            <p className="text-center py-10">Loading users...</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {users.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell className="font-medium">
                      {user.firstName} {user.lastName}
                    </TableCell>

                    <TableCell>{user.emailId}</TableCell>

                    {/* Role */}
                    <TableCell>
                      <Select
                        defaultValue={user.role}
                        onValueChange={(val) =>
                          handleRoleChange(user._id, val, user.firstName)
                        }
                      >
                        <SelectTrigger className="w-[120px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="user">User</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>

                    {/* Status */}
                    <TableCell>
                      <Badge
                        variant={
                          user.status === "active" ? "default" : "destructive"
                        }
                      >
                        {user.status}
                      </Badge>
                    </TableCell>

                    {/* Actions */}
                    <TableCell className="flex justify-end gap-2">
                      {/* Block */}
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() =>
                          handleStatusChange(
                            user._id,
                            user.status === "active" ? "blocked" : "active"
                          )
                        }
                      >
                        <Ban size={16} />
                      </Button>

                      {/* Make Admin */}
                      <Button
                        size="icon"
                        variant="secondary"
                        onClick={() =>
                          handleRoleChange(
                            user._id,
                            user.role === "admin" ? "user" : "admin"
                          )
                        }
                      >
                        <Shield size={16} />
                      </Button>

                      {/* Delete */}
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => handleDelete(user._id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
      <Toaster richColors position="top-right" />
    </div>
  );
}
