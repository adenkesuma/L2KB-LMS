interface HasTokenProps {}

export const HasToken: React.FC<HasTokenProps> = () => {
  const router = useRouter();
  if (getAccessToken()) {
    return router.replace("/update_profile");
  }

  return null;
};

export default ClientOnly;
