import { clients } from "../util/constants";
import { styles } from "../util/util";
import { ClientCard } from "./index";

const Clients = () => {
  return (
    <div className={`${styles.flexCenter} my-4`} id="clients">
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <ClientCard key={client.id} logo={client.logo} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
