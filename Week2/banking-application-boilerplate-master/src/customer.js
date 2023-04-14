var customerList=[];
var ids = [];

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      let customer = [CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category];

      if(ids.includes(CustomerId)){
            return customerList;
      }
      else{
            customerList.push(customer);
            ids.push(CustomerId);
            return customerList;
      }
}

const updateCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
    for (const customer of customerList) {
        if (customer[0] === CustomerId) {
            customer[1] = CustomerName;
            customer[2] = CustomerAge;
            customer[3] = CustomerAddress;
            customer[4] = CustomerContactNumber;
            customer[5] = Category;
        }
    }
}

const getAllCustomers=()=>{
  return customerList;
}

module.exports={addCustomer,updateCustomer,getAllCustomers}