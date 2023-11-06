import { Text } from "./Welcome.styled";
import background from "../../img/background.jpg";
function Welcome() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        suscipit, aliquam nam id vero similique cumque exercitationem mollitia
        aut a laborum porro ad aspernatur error quam illo molestiae eos
        perferendis? Maiores, non praesentium recusandae laudantium magnam quam
        distinctio corrupti dolor perferendis quasi quibusdam qui reiciendis
        fugit, deserunt eum ipsa similique perspiciatis reprehenderit aut
        debitis. Vel quidem aut est iste autem? Iusto obcaecati voluptate ab
        numquam, dolor praesentium architecto similique, ducimus eligendi nihil
        sunt, suscipit impedit. Voluptates laudantium asperiores fugiat ullam.
        Quibusdam expedita deleniti aut itaque, architecto cupiditate omnis
        voluptas pariatur. Incidunt iusto animi possimus, ipsum consectetur
        harum ratione modi vitae quis voluptatem quae quo magnam, ea
        consequuntur iste reprehenderit consequatur nisi rem soluta blanditiis
        dicta?
      </Text>
      <div>
        <img src={background} alt="background" width={600} height={400} />
      </div>
    </div>
  );
}

export default Welcome;
