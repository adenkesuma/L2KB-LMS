import { getCookie } from "@/lib/services/cookie.service";
import OrganizationStructureInput from "./_components/page";

const OrganizationStructure = async () => {
    const adminAK = await getCookie("adminAK");

    return (
        <div>
            <OrganizationStructureInput adminAK={adminAK} />
        </div>
    )
}

export default OrganizationStructure