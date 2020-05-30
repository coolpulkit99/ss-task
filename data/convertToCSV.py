import requests
def convertToFormat(data):
    order="id,phones,email,firstname,lastname,role,username,isActive,_created_at,_updated_at"
    order=order.split(",")
    values=[]
    for field in order:
        if(field=="id"):
            try:
                values.append(data[field])
            except:
                values.append(data['_id'])
        else:
            values.append(str(data[field]))
    return ",".join(values)+"\n"

    # values=data.values()
    # return ",".join(map(str,values))+"\n"

    # try:
    #     return data['id']+","+data['phones']+","+data['email']+","+data['firstname']+","+data['lastname']+","+str(data['role'])+","+data['username']+","+str(data['isActive'])+","+data['_created_at']+","+data['_updated_at']+"\n"
    # except:
    #     return data['_id']+","+data['phones']+","+data['email']+","+data['firstname']+","+data['lastname']+","+str(data['role'])+","+data['username']+","+str(data['isActive'])+","+data['_created_at']+","+data['_updated_at']+"\n"
url="https://open-to-cors.s3.amazonaws.com/users.json"
body=requests.get(url)
data=body.json()

file=open("userDetails.csv",'w')
#if(len(data)>0):
file.write("id,phones,email,firstname,lastname,role,username,isActive,_created_at,_updated_at\n")
for users in data:
    appendData=convertToFormat(users)
    file.write(appendData)
    # print(appendData)
file.close()
    
