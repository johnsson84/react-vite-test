import { useState } from "react";
import React from "react";
import "../css/Content.css";

const articles = [
  <div className="article2">
    <h2>Gnome</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo magnam
      explicabo, praesentium illum excepturi voluptatum temporibus ducimus sequi
      deserunt dignissimos.
    </p>
  </div>,
  <div className="article2">
  <h2>Gentoo</h2>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo magnam
    explicabo, praesentium illum excepturi voluptatum temporibus ducimus sequi
    deserunt dignissimos.
  </p>
</div>,
  <div className="article2">
    <h2>Kaffe</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo magnam
      explicabo, praesentium illum excepturi voluptatum temporibus ducimus sequi
      deserunt dignissimos.
    </p>
  </div>,
  <div className="article2">
    <h2>KDE Desktop</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, animi
      aspernatur. Perferendis, sunt. Voluptas at earum officia provident
      accusamus consequatur repellendus praesentium quaerat hic totam minus ipsa
      beatae deleniti voluptatem, sapiente dignissimos temporibus repellat unde,
      labore sed delectus optio necessitatibus. Deserunt quas, consequatur
      doloremque, exercitationem, consectetur dignissimos quaerat ipsum labore
      similique praesentium pariatur autem. Culpa nam, unde nulla alias, velit,
      inventore at minus veritatis labore ullam maxime nihil hic nemo ducimus
      aut totam voluptatum perferendis. Quod incidunt eum modi iste nam,
      distinctio qui sint recusandae corporis quasi minus officiis est neque
      harum libero doloremque a aspernatur debitis! Aperiam, odio cumque.
    </p>
  </div>,
  <div className="article2">
    <h2>SystemD vs OpenRC</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque
      sequi eligendi, rem inventore incidunt vitae tempore ut, nulla
      consequuntur consectetur exercitationem ad ducimus esse ullam dolorum,
      veritatis quam quaerat quas dolor in quae expedita asperiores libero. Et
      odio nihil quisquam ut molestias ipsam repellendus corrupti, sequi quam
      iure, rem voluptatum, natus iste ab sit. Esse dolore, ratione eaque quas,
      a modi voluptatem nobis possimus aliquam maxime labore, velit repudiandae
      nam. Accusamus iste, obcaecati maiores pariatur reprehenderit natus
      facilis autem nostrum unde accusantium, soluta rerum aliquam hic sed enim
      qui voluptatibus at ea veritatis maxime incidunt! Maxime accusantium
      dolorem consequatur modi consequuntur ipsa aliquid, minima illo dolore,
      ducimus corrupti. Facere nostrum fugiat odit dicta voluptatem aspernatur?
      Eligendi, laborum dolorum? Veritatis minus architecto maiores quis quod
      eveniet iure omnis illo atque quas cum eum consectetur dolor mollitia
      suscipit velit ut id deserunt, totam beatae iusto! Ex ab dolore corporis
      nisi ullam vitae praesentium ipsa dolorem obcaecati odio aut explicabo ut
      expedita ducimus dolorum, laboriosam provident earum minima quaerat
      aperiam in autem nulla vero! Harum alias, iure accusantium ad excepturi
      recusandae nulla provident temporibus laboriosam nobis doloribus,
      repellendus nisi? Rem nam aut aliquid officiis praesentium placeat
      necessitatibus, ipsum animi quaerat iure. Reprehenderit assumenda illum
      iure praesentium nisi aliquam molestiae ad harum nulla cumque. Sit nihil
      eum fugit voluptate quaerat. Ad, laboriosam dolores? Commodi cumque hic, a
      recusandae dolores est vel beatae at qui obcaecati error laborum
      similique. Fugiat iure quo totam facilis dignissimos, provident vero eum
      iste error suscipit vel neque harum adipisci quos amet blanditiis ipsum
      exercitationem dolorum beatae quidem ipsam pariatur doloremque, maiores
      omnis. Quisquam quibusdam voluptate quo, assumenda esse tempore aliquid
      laudantium? Nobis est laudantium, eligendi sunt cupiditate ipsam omnis
      dignissimos dolorum, voluptatem aliquam nihil quis! Perferendis illum
      doloribus quidem perspiciatis vitae magnam eligendi, hic quia, delectus
      beatae officiis, vero corporis obcaecati laborum exercitationem error
      repellat reprehenderit in voluptatum nulla quibusdam! Illum ipsum in
      dolorum inventore sit eius nemo ea quia repellat corrupti cupiditate porro
      neque, rem quod unde molestiae alias. Nulla at ullam consequatur voluptate
      numquam ipsa illo dolore suscipit corrupti voluptatibus, illum fugiat.
      Porro nihil aut ducimus ab, quis repellendus mollitia dolore ratione
      asperiores neque nostrum ipsum reiciendis corporis illo expedita unde
      fugit quasi harum iusto magni. Minima assumenda quibusdam voluptate
      suscipit iusto, mollitia itaque maiores soluta necessitatibus sequi iure
      velit eius harum? Autem ea aperiam doloribus? Quidem pariatur quam eum
      odit laborum rerum eos perferendis labore?
    </p>
  </div>,
];

const Content = () => {
  const [art, setArt] = useState(articles);

  return ( 
    <div className="content">
        {art.map((art, i) => {
            return (
                <React.Fragment key={i}>{art}</React.Fragment>
            );
        })}
    </div>
    );
};

export default Content;
