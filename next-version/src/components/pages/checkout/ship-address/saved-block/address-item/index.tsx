import { AddressType } from "@/lib/type";

export function AddressItem(address: AddressType) {
  return (
    <div className="flex flex-col grow">
      <span className="text-lg text-[#1A1A1A] mb-2">
        {address.fname} {address.lname}
      </span>
      <span className="text-base text-gray-label">{address.address}</span>
      <span className="text-base text-gray-label">
        {address.city},{address.state}, {address.zipCode}
      </span>
      <span className="text-base text-gray-label">{address.phone}</span>
    </div>
  );
}
