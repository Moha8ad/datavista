import { Header } from "components";
import { tokens } from "theme";
import { useTheme } from "@mui/material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MainWrapper } from "./styles";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MainWrapper>
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[100]}
            fontWeight="bold"
            variant="h5"
          >
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.primary[100]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            vitae rerum, assumenda aperiam necessitatibus laudantium, ullam
            recusandae magni impedit placeat iusto illo consequuntur. Eum
            repellat totam alias ea necessitatibus atque, enim modi fugiat optio
            beatae saepe quo nam distinctio nihil eos porro. Aut deserunt
            maiores in quod corporis autem, est praesentium dignissimos tempora
            unde quasi eum dolorum optio, exercitationem mollitia officiis neque
            tenetur porro culpa reiciendis. Ratione corrupti atque, accusamus
            placeat esse sequi aliquid cumque odit nihil ex quis nostrum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[100]}
            fontWeight="bold"
            variant="h5"
          >
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.primary[100]}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            sapiente qui accusantium nostrum consequuntur illo repudiandae
            suscipit enim iste error, aut doloribus quis laboriosam sed sit,
            laudantium nihil placeat voluptates architecto maxime quo quas
            molestiae consectetur? Autem quaerat dolore minus molestiae. Enim,
            et doloribus similique qui facere, voluptas numquam quam repellat
            tempora, pariatur voluptates consequuntur! Id sit perspiciatis
            tempora accusantium! Minima, iure reiciendis eum deserunt minus
            cupiditate, nihil consectetur iste quam qui quia, eligendi ab cum
            molestiae inventore architecto! Magnam expedita tenetur sint
            nostrum, perspiciatis vero neque aliquid quis nisi numquam
            consectetur unde. Vel magni, accusamus reprehenderit autem dicta
            alias vero et velit! Assumenda accusantium, dolores eos repellat in,
            ratione asperiores quos recusandae architecto commodi at! Natus
            maxime possimus laborum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[100]}
            fontWeight="bold"
            variant="h5"
          >
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.primary[100]}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            eligendi a corrupti? Aliquid, nihil. Obcaecati, voluptas commodi non
            fugit totam unde suscipit ex magnam odit perferendis quibusdam
            mollitia quaerat quidem, natus sequi nulla vitae nisi error!
            Consequuntur qui aperiam ea dolorem aliquid. Voluptatum quisquam
            possimus voluptatibus magnam sapiente non consequatur!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[100]}
            fontWeight="bold"
            variant="h5"
          >
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.primary[100]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in
            maiores quia asperiores esse, id quis, nobis dolorem, sunt
            exercitationem aspernatur consectetur omnis explicabo ex ducimus
            nesciunt optio sit porro amet fuga. Voluptas distinctio quidem sed
            molestias quibusdam facere illo. Mollitia, nobis recusandae pariatur
            in neque laborum hic impedit beatae sit dicta facilis quod deleniti
            quia a asperiores voluptas itaque, consequuntur eum expedita ducimus
            repellat quisquam. Culpa placeat enim autem saepe. Reprehenderit,
            incidunt! Debitis dolor, numquam voluptatem quas eligendi
            repudiandae neque quisquam libero voluptatibus asperiores odio,
            exercitationem quaerat, nobis consequuntur tempore? Quibusdam minus
            numquam et earum praesentium. Ipsa nihil blanditiis dolor ex, quia
            exercitationem fuga cumque odio ratione eius beatae ipsam! Nisi
            dolorum earum odit sed perspiciatis, iure perferendis fugiat
            asperiores numquam repudiandae ipsa nihil accusamus repellendus
            velit eaque autem iste saepe, provident placeat non tenetur
            quibusdam optio. Soluta, minus consectetur molestiae maiores ad
            debitis nam? In quas saepe cum molestias asperiores? Laudantium
            necessitatibus veritatis esse cupiditate totam magni suscipit
            temporibus repellat aut hic. Tempora, eveniet, labore quisquam
            dolorem illo ab velit delectus in quia quis enim aliquid officiis
            nihil! Inventore maxime, dignissimos eveniet ut, consequuntur
            delectus porro enim reiciendis at provident cumque fugiat incidunt?
            A facere perferendis deserunt ipsum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[100]}
            fontWeight="bold"
            variant="h5"
          >
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.primary[100]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Commodi atque
            aspernatur nulla cum fugiat nostrum doloribus, quod iste placeat
            esse.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </MainWrapper>
  );
};

export default FAQ;
