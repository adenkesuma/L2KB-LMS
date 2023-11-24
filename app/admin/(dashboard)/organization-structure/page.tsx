import { getCookie } from "@/lib/services/cookie.service";
import OrganizationStructureInput from "./_components/organization-input";

const OrganizationStructure = async () => {
    const adminAK = await getCookie("adminAK");

    return (
        <div>
            <OrganizationStructureInput adminAK={adminAK} />
        </div>
    )
}

export default OrganizationStructure