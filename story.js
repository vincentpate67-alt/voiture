'use strict';
// The story is authored locally. No network, model calls or procedural prose.
const BOOK=[],ITEMS={};
function O(id,name,views,extra={}){ITEMS[id]={name,views,...extra}}
function A(label,text,extra={}){return {label,text,cost:15,...extra}}
function L(name,lead,text,actions,extra={}){return {name,lead,text,actions,...extra}}
function C(label,after,effect={},sub='Cette décision restera'){return {label,after,effect,sub}}
function D(title,text,choices){return {title,text,choices}}
function B(title,place,day,start,budget,intro,objective,places,decision,extra={}){BOOK.push({title,place,day,start,budget,intro,objective,places,decision,...extra})}

O('envelope','L’enveloppe sans timbre',[
`Votre nom est écrit au feutre noir. L’écriture ressemble à celle d’Inès quand elle essaie de rendre sa colère lisible. Le rabat n’a jamais été collé : deux agrafes ont suffi. Un petit morceau de laine bleue est resté pris dans l’une d’elles.`,
`Au verso, votre surnom : « {alias} ». En dessous, la phrase de votre famille : « {phrase} ». Quelqu’un connaissait vos habitudes, ou a eu accès à quelqu’un qui les connaissait. Cela n’authentifie pas l’ensemble du courrier.`,
`Le numéro de consigne a été corrigé. Sous le 14, on distingue un 41. À l’intérieur du rabat, une adresse : Café du Passage. La correction a été faite avec un autre stylo. Deux personnes ont préparé cet envoi.`],{flag:'two_hands',note:'Deux écritures différentes sur l’enveloppe ; l’adresse du Café du Passage est dans le rabat.',proof:1});
O('ticket','Le ticket de consigne',[
`Un rectangle de papier thermique, imprimé à 18 h 12. Consigne 14, gare de Rivebrune. Le nom du déposant a été volontairement laissé vide. L’heure est pâle, mais le numéro de machine reste lisible.`,
`« Si personne ne vient, ne donne pas tout à la première personne qui te croit. » Ce n’est pas l’écriture de votre sœur. Une tache de café a traversé le mot « première ».`,
`Le ticket a été émis par le terminal d’entretien, pas par le guichet public. Il ne prouve donc pas qu’Inès est venue à la gare. Quelqu’un disposant d’un accès technique pouvait le produire à distance.`],{flag:'service_ticket',note:'Le ticket de consigne vient d’un terminal d’entretien. Il ne situe pas Inès à la gare.',proof:1});
O('notebook','Le carnet d’Inès',[
`Une couverture grise, un élastique détendu. Inès écrit en colonnes : « dit », « vu », « vérifié ». La troisième colonne est presque vide. Elle a refusé plusieurs fois de transformer un soupçon en certitude.`,
`Une page porte seulement : « {phrase} ». Sous cette phrase, un petit cadenas dessiné et quatre cases. Votre ancien code commun est toujours le même : {code}. Le carnet ne le donne à personne d’autre.`,
`Entre deux pages, une liste de tâches ordinaires : réparer une fenêtre, acheter une ampoule, appeler la mère de Sam. Cette enquête a occupé la place de sa vie quotidienne, pas celle d’un jeu. Sur la dernière ligne : « Ne pas laisser Nora faire de moi le sujet. »`],{flag:'ines_notes',note:'Inès sépare les témoignages, les observations et les faits vérifiés. Dernière consigne : ne pas devenir le sujet de l’enquête.'});
O('manifest','Le manifeste de transport',[
`Une photocopie de mauvaise qualité. La nuit de l’incendie des Ormes, un minibus a transporté sept personnes vers le centre de repos de Belrive. Aucun nom n’est donné ; les passagers sont des numéros.`,
`Le conducteur devait faire signer la réception à 02 h 10. La ligne de signature est vide. Un second feuillet facture une attente jusqu’à 03 h 40. L’absence de signature ne signifie pas l’absence de trajet.`,
`Les sept numéros ne sont pas des patients : le préfixe correspond aux dossiers de relogement d’urgence. C’est une opération administrative qui a emprunté les outils du transport sanitaire. La facture porte le nom d’Aster, société prestataire.`],{flag:'manifest_detail',note:'Sept dossiers de relogement transportés à Belrive après l’incendie. Aster a utilisé une facture de transport sanitaire.',proof:2});
O('photo','La photographie du palier',[
`Cinq personnes sourient autour d’un gâteau posé sur un carton. Le palier des Ormes est peint en vert. Sam est plus jeune, le regard tourné vers quelqu’un hors champ. Une porte porte le numéro 27.`,
`« Dernier anniversaire avant les travaux », a écrit une femme. La date précède de six mois le diagnostic d’insalubrité présenté comme inattendu par la mairie. Les habitants savaient qu’il existait un projet.`,
`Dans le reflet de la vitre, une affiche annonce une réunion de relogement. On y distingue le logo d’Aster. Les contacts entre la société et les habitants ont commencé avant le prétendu appel d’offres urgent.`],{flag:'early_aster',note:'Aster organisait déjà une réunion de relogement six mois avant l’incendie.',proof:2});
O('maintenance','Le relevé de maintenance',[
`Une feuille signée Malik S. recense les interventions aux Ormes. La ligne « extraction, cage B » est encerclée. Des essais étaient prévus deux jours avant l’incendie.`,
`Au dos, une copie carbone indique « essai reporté, accès refusé par donneur d’ordre ». Ce n’est pas une intervention terminée ; le tableau informatique l’affiche pourtant comme « résolue ».`,
`Le compte ayant clôturé le ticket appartient à une boîte partagée du prestataire. On ne peut pas en déduire qui a cliqué. Malik avait signalé un défaut ; quelqu’un a ensuite rendu sa propre alerte invisible.`],{flag:'maintenance_detail',note:'L’alerte sur l’extraction a été clôturée sans essai. Le compte est partagé : aucune identité individuelle prouvée.',proof:2});
O('deed','La promesse de vente',[
`Une promesse de vente lie la SCI des Ormes à une filiale d’Aster. Le prix augmente si la parcelle peut être livrée libre de toute occupation. Les signatures précèdent l’incendie.`,
`Une annexe prévoit une prime « d’accompagnement à la sortie ». Il manque la définition de cet accompagnement. Une clause avantageuse n’est pas, à elle seule, une preuve de crime.`,
`Le notaire a tamponné une réserve : « information des locataires à justifier ». Cette réserve n’apparaît pas sur la version municipale. Quelqu’un a retiré la page qui signalait précisément le problème.`],{flag:'deed_detail',note:'La promesse de vente précédait l’incendie ; une réserve notariale sur l’information des habitants a disparu de la copie municipale.',proof:2});
O('tape','La cassette de Lucie',[
`Une microcassette portant « Ormes, réunion 3 ». Elle a été enregistrée par Lucie Delmas, ancienne agente de relogement. Un petit trait au feutre marque le début de la seconde face.`,
`L’étiquette recouvre une ancienne date. Lucie a réutilisé un support personnel. La cassette ne constitue pas un enregistrement officiel, et ses coupures devront être expliquées avant toute publication.`,
`À la fin, après le bruit d’une chaise, Lucie dit : « Je garde ça parce qu’ils changent les comptes rendus. » Elle ne savait pas qu’elle enregistrait encore. Ce détail éclaire son intention sans garantir le contenu.`],{flag:'tape_origin',note:'Lucie enregistrait les réunions pour comparer les versions des comptes rendus.',proof:1});
O('drive','La clé de sauvegarde',[
`Une clé USB en métal, sans marque, pendue à un porte-clés de piscine. Son contenu est une archive chiffrée, pas un raccourci vers tous les secrets de la ville.`,
`Un papier minuscule est roulé autour de l’anneau : « notre carnet ». Il renvoie au code de quatre chiffres choisi avec Inès : {code}. Ce code ouvre une copie locale ; il n’accorde aucun accès à un système extérieur.`,
`La copie a été créée après le dernier message que vous avez reçu d’Inès. Votre sœur était donc encore active au moment où l’enveloppe était déjà en route. Elle vous a laissé une sauvegarde, pas une lettre d’adieu.`],{flag:'drive_date',note:'La sauvegarde d’Inès est postérieure à son dernier message. Le code du carnet ouvre la copie locale.'});
O('ledger','Le registre des admissions',[
`Sept numéros, sept heures d’arrivée. Des noms ont été remplacés par des initiales sur cette copie autorisée. La colonne « accord éclairé » porte deux signatures et cinq mentions « à compléter ».`,
`Les personnes ne sont pas restées toutes la même durée. Certaines sont reparties le lendemain ; d’autres ont été transférées. L’expression « les sept disparus » simplifie abusivement leurs situations.`,
`Trois heures d’admission ont été réécrites après la clôture du registre. Les initiales de correction sont celles d’une cadre absente ce soir-là. La correction pourrait avoir été faite sur instruction, mais cela reste à établir.`],{flag:'ledger_detail',note:'Au moins cinq accords d’admission restaient incomplets. Trois heures ont été corrigées après clôture.',proof:2});
O('statement','Le témoignage de Lucie',[
`Trois pages datées et signées. Lucie y distingue ses observations de ce qu’elle a appris par d’autres. Elle accepte que son nom figure sur une pièce transmise à un avocat.`,
`Elle demande que l’adresse de sa fille soit retirée des versions destinées à la presse. Cette protection n’enlève rien à la valeur de son récit. Une note vous autorise à conserver la version intégrale sous enveloppe.`,
`Lucie n’accuse personne d’avoir mis le feu. Elle décrit l’exploitation de la nuit de l’incendie pour accélérer des départs et faire signer des formulaires sans explication. C’est moins spectaculaire ; c’est ce qu’elle peut soutenir.`],{flag:'lucie_signed',note:'Lucie témoigne des pressions sur les départs. Elle ne témoigne pas de l’origine de l’incendie.',proof:3});
O('contract','Le contrat de substitution',[
`Le contrat prévoit une permanence de relogement, rémunérée au dossier « clos ». Aucun indicateur ne vérifie où les personnes sont réellement allées.`,
`Une annexe définit « clos » comme l’absence de contestation sous quarante-huit heures. Les habitants déplacés sans leur courrier avaient précisément peu de chances de contester à temps.`,
`Une chaîne de validations porte les initiales d’Aster, du cabinet municipal et du bailleur. Plusieurs organismes avaient une part du mécanisme. Retirer un seul nom de la page ne ferait pas disparaître leur interdépendance.`],{flag:'contract_detail',note:'Les dossiers étaient clos après 48 heures sans contestation ; les déplacés ne recevaient plus leur courrier.',proof:3});
O('list','La liste des personnes',[
`Cette liste comporte des adresses actuelles, des contacts familiaux et des renseignements privés. Elle montre où chercher les personnes concernées ; elle n’est pas faite pour être diffusée.`,
`Inès a écrit : « Demander avant de raconter. » Une personne a ajouté qu’elle ne souhaitait pas être contactée. Une autre demande à être appelée uniquement par l’intermédiaire de son frère.`,
`En bas, Lucie a séparé deux lignes par un trait : les personnes dont la situation a été vérifiée et celles dont elle n’a aucune nouvelle. Les absences d’information ne doivent pas devenir des décès inventés.`],{flag:'list_detail',note:'Les personnes de la liste ont des souhaits de contact distincts. Les coordonnées ne doivent pas être rendues publiques.'});
O('backup','L’export certifié',[
`Une copie horodatée des versions de formulaires, conservée par le prestataire informatique. Les empreintes numériques sont reproduites sur un bordereau signé.`,
`Les empreintes permettent de vérifier qu’un fichier n’a pas changé depuis cet export. Elles ne prouvent pas que son contenu était vrai au moment de sa création.`,
`Deux versions d’une même consigne sont jointes. L’ancienne demande un accord des habitants. La nouvelle remplace l’accord par une information « réputée donnée ». Les dates de modification sont séparées de onze minutes.`],{flag:'backup_detail',note:'Un export certifié conserve les deux versions de la consigne de consentement, modifiées à onze minutes d’intervalle.',proof:3});
O('letter','La lettre jamais envoyée',[
`Une lettre de votre père à Inès, retrouvée parmi les affaires familiales. Il travaillait pour le service municipal des bâtiments. Il n’a jamais dirigé les relogements.`,
`Il reconnaît avoir accepté de classer un signalement « dans l’attente d’un retour » plutôt que d’insister par écrit. Il explique sa peur de perdre son poste. Il ne demande pas à être absous.`,
`La dernière phrase reste inachevée : « Je vous ai appris à ne pas faire de vagues et je vois bien ce que cela… » Votre famille est aussi faite de choses qui n’ont pas trouvé leur fin.`],{flag:'father_letter',note:'Votre père avait laissé un signalement en attente. Sa lettre reconnaît ce silence sans expliquer l’ensemble de l’affaire.'});
O('badge','Le badge de Malik',[
`Un badge désactivé, conservé comme justificatif de son ancien emploi. Il n’ouvre aucune porte. Malik a découpé la puce pour qu’on ne puisse pas le faire passer pour un accès volé.`,
`Son numéro figure sur la liste des intervenants de la semaine de l’incendie. La photo paraît beaucoup plus ancienne que l’homme qui vous l’a donné.`,
`La date au dos confirme qu’un nouveau prestataire avait repris les accès avant la signature publique de son marché. Cela établit une chronologie, sans permettre de désigner la personne qui portait chaque badge.`],{flag:'badge_date',note:'Aster gérait les accès avant l’annonce officielle du marché.',proof:1});
O('map','Le plan des réseaux',[
`Un plan papier montre les branchements d’eau, l’extraction et les accès de secours des Ormes. Un couloir technique traverse deux bâtiments qui semblent séparés depuis la rue.`,
`Les annotations au crayon sont de Malik. Il signale la galerie inondable et barre une porte condamnée. Le plan n’est pas une invitation à s’y aventurer.`,
`L’alimentation électrique du système d’extraction est indépendante de l’éclairage du hall. Le fait que les lampes fonctionnaient ne démontre donc pas que l’extraction fonctionnait aussi.`],{flag:'map_detail',note:'L’extraction et l’éclairage des Ormes avaient des alimentations distinctes.',proof:1});

B('L’enveloppe.','La gare de Rivebrune','Lundi',1080,90,
`Le train s’immobilise avant que la pluie ne cesse. Vous revenez à Rivebrune parce qu’Inès vous a demandé de venir. Pas « quand tu pourras ». Ce soir.

Elle devait vous attendre sur le quai. À sa place, un employé tient une enveloppe à votre nom. Votre téléphone affiche un message reçu une heure plus tôt : « Si je ne réponds pas, ne t’énerve pas tout de suite. » Vous aviez répondu avec un pouce levé. Maintenant cette petite icône vous semble d’une légèreté insupportable.

L’employé regarde son horloge. Le hall ferme dans une heure et demie. La ville, derrière les vitres, paraît à la fois familière et déplacée de quelques centimètres.`,
'Comprendre ce qu’Inès vous a laissé avant la fermeture du hall.',[
L('L’employé du hall','Une remise inhabituelle',`Il s’appelle Denis. Il a posé l’enveloppe entre vous comme un objet qu’il préfère ne pas toucher. « Je dois vous demander une signature. Après, je peux vous dire ce que j’ai vu. »`,[
A('Qui vous a confié l’enveloppe ?',`Denis décrit une femme portant un bonnet bleu. Elle ne ressemblait pas à la photo d’Inès que vous lui montrez. Elle savait votre train et votre surnom. Elle a payé le dépôt d’un colis avec des pièces, puis a demandé si les caméras du hall enregistraient le son.

Denis lui a répondu non. Il ne sait pas pourquoi il a été aussi précis.`,{note:'Une femme au bonnet bleu a déposé l’enveloppe. Ce n’était vraisemblablement pas Inès.',effect:{rel:{ines:1}},item:'envelope'}),
A('À quelle heure est-elle passée ?',`Il consulte sa feuille de service plutôt que sa mémoire. Dix-sept heures cinquante-huit, juste avant le remplacement d’un rouleau de tickets. Vous remarquez qu’il barre une heure griffonnée avant de donner la bonne.

« On raconte souvent une histoire plus propre que ce qu’on a réellement vu. Je préfère vérifier. » Vous lui dites que vous aussi.`,{note:'Le dépôt de l’enveloppe a eu lieu à 17 h 58. Le ticket de consigne a été imprimé plus tard.',effect:{skill:{observation:1}},item:'ticket'}),
A('Pouvez-vous m’aider à la retrouver ?',`Denis n’a pas le droit de vous montrer la vidéosurveillance. Il peut consigner votre demande pour éviter l’effacement automatique et vous donner un numéro de référence.

Il ajoute que la femme avait une tache blanche sur la manche, comme de la farine ou du plâtre. Un détail minuscule. Il semble soulagé de pouvoir au moins vous laisser cela.`,{effect:{flag:'station_log',proof:1},note:'Denis a enregistré une demande de conservation des images. La déposante avait une trace blanche sur sa manche.'})]),
L('La consigne 14','Un colis pour vous',`Le mur des consignes est éclairé d’un néon blanc. Un ticket sort à moitié de l’enveloppe. La serrure du casier 14 est mécanique : il suffit de présenter le reçu au préposé.`,[
A('Présenter le ticket',`Le préposé vérifie le numéro, puis rapporte un sac en toile. À l’intérieur, un carnet, une batterie portable et une pomme enveloppée dans une serviette. Inès vous connaît : vous oubliez de manger quand vous cherchez une réponse.

Le carnet a été confié ici dans l’après-midi. La personne qui l’a déposé n’a pas laissé son nom.`,{item:'notebook',note:'Le sac d’Inès contenait son carnet et des objets du quotidien. Elle préparait une attente, pas nécessairement un départ.'}),
A('Examiner le reçu avant de le donner',`Vous vous écartez du passage. L’encre est encore nette au bord du papier. Le terminal mentionné n’est pas celui que le préposé utilise.

Il confirme que les agents techniques disposent d’une seconde imprimante. Cela ne lui paraît pas suspect. À vous non plus, pas encore. Vous photographiez simplement le reçu pour conserver ce qui pourrait devenir utile.`,{item:'ticket',note:'La consigne peut être enregistrée depuis un terminal de service.',effect:{skill:{observation:1}}}),
A('Demander si quelqu’un a réclamé le sac',`Un homme en veste claire s’est présenté dix minutes avant votre arrivée. Il connaissait le numéro, mais pas votre nom complet. Le préposé a refusé. L’homme s’est excusé, sans élever la voix.

« C’est presque ce qui m’a frappé », dit le préposé. « Les gens pressés par leurs affaires râlent. Lui, il a juste changé de plan. »`,{effect:{flag:'bag_follower'},note:'Un homme en veste claire a essayé de récupérer le sac avant votre arrivée.'})]),
L('Le quai désert','Votre téléphone et la ville',`Il y a du réseau près du distributeur de boissons. Trois correspondants peuvent encore vous répondre : Inès, un contact inscrit dans son message, et le vieux numéro de votre père.`,[
A('Appeler Inès',`La messagerie se déclenche après cinq sonneries. Sa voix enregistrée vous dit qu’elle rappelle toujours. Vous ne l’aviez jamais crue jusqu’au bout.

Vous laissez un message simple : vous êtes arrivé, vous avez reçu l’enveloppe, vous attendez des instructions. Pas de reproche. À la fin, vous prononcez votre phrase familiale : « {phrase} ».`,{effect:{flag:'gentle_message',rel:{ines:1}},note:'Vous avez laissé à Inès un message calme contenant votre phrase familiale.'}),
A('Appeler le contact de son message',`Une femme décroche avant la seconde sonnerie. « Vous êtes {name} ? Je m’appelle Nora. Venez au Café du Passage. Je vous expliquerai ce que je peux. »

Vous demandez où est votre sœur. Elle laisse passer assez de silence pour que vous compreniez qu’elle choisit ses mots. « Je n’en suis pas certaine. C’est justement le problème. »`,{effect:{flag:'nora_called',rel:{nora:1}},note:'Nora vous attend au Café du Passage. Elle ne prétend pas savoir où est Inès.'}),
A('Appeler votre père',`Le numéro n’est plus attribué. Vous le saviez : il est mort il y a deux ans. Votre doigt a suivi un vieux réflexe avant votre pensée.

Sur le quai, personne ne vous voit rester immobile. Vous ouvrez son dernier message, un banal rappel de rendez-vous. Le nom de la ville y figure déjà, et celui du service des bâtiments où il travaillait.`,{effect:{flag:'father_called',skill:{calm:1}},note:'Votre père travaillait au service municipal des bâtiments.'})])],
D('Par où commencer ?',`La gare va fermer. Le nom du Café du Passage revient dans les éléments dont vous disposez. Vous devez choisir la façon dont vous arrivez dans cette histoire.`,[
C('Prévenir Nora de mon arrivée',`Vous envoyez votre heure d’arrivée. Nora répond par une adresse précise et vous recommande de ne rien laisser à la gare. Pour la première fois depuis le train, quelqu’un vous attend.`,{flag:'nora_warned',rel:{nora:1},items:['envelope','ticket','notebook']}),
C('Conserver mes informations pour moi',`Vous copiez l’adresse sans répondre. Vous voulez entendre Nora avant de lui apprendre ce qu’elle ignore. Dans votre poche, le téléphone vibre une fois, puis se tait.`,{flag:'reserved_start',items:['envelope','ticket','notebook']}),
C('Signaler l’absence d’Inès au commissariat',`Vous faites consigner votre inquiétude. On vous demande son âge, ses habitudes, ses derniers mots. Votre déclaration laisse une trace officielle, même si elle ne déclenche pas immédiatement une recherche.`,{flag:'official_start',proof:1,items:['envelope','ticket','notebook']}),
C('Envoyer une photo de l’enveloppe à Inès',`Vous ajoutez : « Je suis là. » La photo part. Vous ne savez pas qui a encore accès à son téléphone. Vous espérez que la simplicité de votre message lui laissera une place pour revenir.`,{flag:'photo_sent',rel:{ines:1},exposure:1,items:['envelope','ticket','notebook']})]));

B('La table du fond.','Le Café du Passage','Lundi',1200,90,
`Le café n’a presque pas changé. Les banquettes ont été recouvertes, mais la table du fond porte toujours la brûlure que vous avez faite avec Inès, une nuit où vous aviez tenté de rallumer une bougie au briquet.

Nora se lève quand vous entrez. Elle n’a ni carnet visible ni grand appareil photo. Juste un verre d’eau et deux téléphones posés face contre table. « Je travaille avec votre sœur depuis trois semaines. »

La patronne baisse légèrement le volume de la radio. Dehors, un bus passe sans personne à l’intérieur. Vous avez envie que quelqu’un dise enfin quelque chose de net.`,
'Comprendre ce qu’Inès cherchait, sans décider trop vite qui croire.',[
L('Nora','Une journaliste attend',`Nora vous propose de commander avant de parler. Vous refusez. Elle hoche la tête, comme si elle s’y attendait. « Je ne vous demanderai pas de me faire confiance tout de suite. »`,[
A('Sur quoi travailliez-vous avec Inès ?',`Un an plus tôt, un incendie a touché la résidence des Ormes. Le bilan officiel mentionne un blessé grave et des habitants relogés. Inès s’occupait de dossiers d’aide pour plusieurs familles. Des courriers continuaient à revenir avec la mention « parti sans adresse ».

« Elle ne cherchait pas une disparition spectaculaire. Elle cherchait pourquoi les aides n’arrivaient plus. »`,{note:'L’enquête d’Inès concerne les habitants des Ormes après leur relogement.',effect:{flag:'knows_ormes'}}),
A('Pourquoi ne répondez-vous pas clairement sur elle ?',`Nora admet qu’Inès a annulé un rendez-vous à dix-sept heures. Elle devait voir une ancienne agente, Lucie Delmas. Depuis, Nora n’a reçu qu’un message : « Pas le bon endroit. »

Elle ne sait pas si ce message concerne le rendez-vous ou les documents. Vous observez sa fatigue. Elle n’essaie pas de vous rassurer à bon compte.`,{note:'Inès devait voir Lucie Delmas. Son dernier message disait : « Pas le bon endroit. »',effect:{rel:{nora:1}}}),
A('Lui demander de protéger Inès avant son article',`Vous ne lui demandez pas de renoncer à enquêter. Vous demandez qu’Inès ne soit pas utilisée comme un moyen de rendre son récit plus fort. Nora reçoit la demande sans discuter.

« D’accord. Et de votre côté, pas de publication de noms avant vérification. Vous pouvez me le promettre ? » Vous acceptez.`,{effect:{rel:{nora:1},promise:{id:'names',text:'Ne pas diffuser les noms des témoins avant de leur demander leur accord.',due:21,who:'nora'},flag:'names_promise'},note:'Nora accepte de ne pas faire d’Inès le centre public de son article.'})]),
L('La patronne du café','Un lieu qui voit passer',`La patronne, Mireille, sèche des tasses déjà propres. Quand vous prononcez le nom d’Inès, elle pose le torchon. « Elle paie toujours la consommation de la personne qu’elle attend. Ça me permet de savoir quand elle ne vient pas. »`,[
A('Qui Inès rencontrait-elle ici ?',`Une femme au bonnet bleu venait souvent avant la fermeture. Elle buvait un chocolat malgré la chaleur de septembre. Mireille avait trouvé cela plus remarquable que son nom.

Elle confirme Lucie quand vous le proposez, sans prétendre l’avoir su avant. La trace blanche sur les manches venait de son travail à la boulangerie, de l’autre côté du canal.`,{effect:{flag:'lucie_bakery'},note:'Lucie Delmas travaille à la boulangerie près du canal et porte un bonnet bleu.'}),
A('A-t-elle laissé quelque chose ?',`Mireille rapporte une photographie restée dans un menu. Cinq personnes devant une porte verte, un gâteau sur un carton. Elle ne savait pas à qui la rendre.

Sur le palier, vous reconnaissez la silhouette d’un adolescent rencontré autrefois dans le quartier. Mireille vous donne son prénom actuel : Sam. Il aide au garage des Peupliers.`,{item:'photo',note:'Sam, visible sur la photo, travaille au garage des Peupliers.'}),
A('Pourquoi la radio a-t-elle été baissée ?',`« Parce qu’on écoute moins bien quand on doit crier. » Mireille n’a pas peur d’une table ; elle a peur des conversations entendues à moitié puis racontées comme des faits.

Elle refuse de vous donner les noms des autres habitués. Vous acceptez sa limite. Elle vous apporte enfin un bol de soupe et vous fait payer seulement le café.`,{effect:{skill:{empathy:1},rel:{sam:1}},note:'Mireille protège les habitudes de ses clients ; elle ne donnera pas de liste de visiteurs.'})]),
L('Les documents de Nora','Premières pièces du dossier',`Nora vous laisse consulter un dossier papier. Elle tient à ce que vous distinguiez ce qu’elle a reçu d’une source de ce qu’elle a déjà confirmé.`,[
A('Lire le transport après l’incendie',`La facture indique sept passagers conduits à Belrive pendant la nuit. Nora a retrouvé le conducteur, qui confirme un trajet mais refuse encore de parler de l’identité des gens.

Sept passagers ne signifient pas sept personnes portées disparues. Plusieurs sont réapparues depuis. Le mystère est dans ce que l’administration a inscrit à leur place.`,{item:'manifest',note:'Un minibus a conduit sept habitants à Belrive. Certains ont été retrouvés depuis.',effect:{proof:1}}),
A('Comparer les dates du dossier',`Le discours municipal décrit une réponse improvisée à une urgence. Deux documents de Nora mentionnent pourtant Aster plusieurs semaines avant l’incendie.

Vous ne savez pas encore si c’est une préparation raisonnable ou la trace d’un projet caché. Vous créez deux colonnes dans le carnet plutôt que de choisir l’explication qui vous plaît.`,{test:['observation',3],success:'Les références correspondent à la même parcelle : ce n’est pas une simple ressemblance de noms.',fail:'Une annexe manque. Vous marquez le rapprochement « à confirmer » plutôt que de le transformer en preuve.',successEffect:{proof:1,flag:'dates_linked'},effect:{skill:{observation:1}},note:'Le rôle d’Aster avant l’incendie doit être vérifié par les références de parcelle.'}),
A('Lui demander ce qu’elle ne publiera pas',`Les dossiers contiennent des adresses, des informations de santé et des conflits familiaux sans rapport avec l’affaire. Nora les couvre avec une feuille avant de vous répondre.

« On peut montrer un mécanisme sans ouvrir la vie entière des personnes qu’il a abîmées. Ce sera plus long. Ça me va. » Vous regardez différemment son dossier.`,{effect:{rel:{nora:1},flag:'privacy_talk'},note:'Nora veut documenter le mécanisme sans publier les informations privées des habitants.'})])],
D('Faire une place à quelqu’un.',`Nora ne vous propose pas de contrat. Elle vous demande seulement comment vous souhaitez travailler avec elle. Votre sœur vous a impliqué ; vous pouvez encore décider de quelle façon.`,[
C('Travailler avec Nora et partager mes trouvailles',`Vous posez votre carnet entre les deux verres. Nora range l’un de ses téléphones. La conversation devient plus lente, plus précise. Chacun sait désormais qu’une omission sera un choix.`,{flag:'nora_partner',rel:{nora:2}}),
C('Coopérer, en gardant mes notes personnelles',`Vous convenez de partager les faits, pas tous les souvenirs de famille. Nora accepte la frontière. Vous n’avez pas besoin de vous donner entièrement pour avancer ensemble.`,{flag:'nora_boundary',rel:{nora:1},skill:{calm:1}}),
C('Lui demander de vérifier avant que je m’engage',`Nora vous confie la référence du trajet et l’adresse du garage. Vous lui devez au moins une réponse, pas encore votre confiance. Elle vous dit qu’elle préfère cela à un accord de façade.`,{flag:'nora_test',skill:{observation:1}}),
C('Continuer seul pour le moment',`Vous photographiez seulement les références qu’elle autorise. Avant de partir, elle vous donne tout de même son numéro personnel. « On peut ne pas être d’accord et répondre au téléphone. »`,{flag:'solo_start',rel:{nora:-1},skill:{calm:1}})]),{echo:[{flag:'nora_warned',text:'Nora a déjà réservé une place à l’écart, comme convenu dans votre message.'}]});

B('La porte verte.','Le quartier des Ormes','Mardi',480,105,
`Vous avez dormi quelques heures dans l’ancien appartement familial. Le matin rend les choses plus petites et plus dures. Les Ormes sont à vingt minutes de marche, derrière le collège où Inès allait vous chercher quand vous refusiez le bus.

Une palissade masque le bâtiment incendié. Sur les panneaux, des images de futures terrasses montrent des gens dont aucun ne regarde l’immeuble réel. Un petit square reste ouvert. Des habitants s’y retrouvent avec leurs chiens, comme si le quartier existait encore par fragments.

Sam nettoie une chaîne de vélo près du garage. Il vous reconnaît avant que vous le reconnaissiez. « La famille d’Inès ? Elle avait dit que vous finiriez par venir. »`,
'Retrouver la vie des habitants derrière les dossiers.',[
L('Sam au garage','Un témoin qui refuse les étiquettes',`Sam garde ses mains occupées. Il vous laisse vous asseoir, mais reste debout. Il a connu l’incendie et les mois qui ont suivi ; il ne veut pas qu’on ne lui demande que cette nuit-là.`,[
A('Comment était le quartier avant ?',`Il vous raconte les dimanches où les voisins descendaient une rallonge pour faire fonctionner un appareil à croque-monsieur dans la cour. Une femme gardait les clés de six appartements ; un homme réparait les poussettes.

« Vous allez écrire tout ça, ou seulement la fumée ? » Vous notez les noms des lieux sans lui demander de liste de personnes. Il s’assied enfin.`,{effect:{rel:{sam:2},skill:{empathy:1}},note:'Sam décrit un réseau d’entraide dispersé par le relogement, pas seulement un bâtiment perdu.'}),
A('Où es-tu allé après l’incendie ?',`Un gymnase, puis deux nuits à Belrive, puis un hôtel au bord d’une route. Il a signé une feuille pour recevoir un repas chaud. Plus tard, on lui a dit qu’il avait accepté une solution définitive.

Il ne se souvient pas de tout. Il vous arrête quand vous essayez de compléter ses phrases. Vous revenez à ce qu’il sait avec certitude.`,{note:'Sam dit avoir signé pour un repas ; sa signature aurait ensuite été utilisée comme accord de relogement.',effect:{flag:'sam_meal',proof:1}}),
A('Que puis-je faire pour toi maintenant ?',`Sa mère a encore une boîte de médicaments et des papiers dans un ancien local associatif. L’accès ferme ce soir. Il n’a personne pour garder son petit frère pendant qu’il travaille.

Vous acceptez de récupérer la boîte avant la fermeture. Sam écrit le nom de sa mère, puis le raye pour ne laisser que « boîte bleue, étagère du haut ».`,{effect:{promise:{id:'bluebox',text:'Récupérer la boîte bleue de la mère de Sam au local associatif.',due:4,who:'sam'},rel:{sam:1}},note:'Le local associatif conserve une boîte bleue sur l’étagère du haut.'})]),
L('La palissade','Ce qu’on laisse voir',`La grille est fermée. Vous pouvez observer depuis l’espace public ; entrer sur le chantier serait dangereux et n’apporterait pas forcément de meilleures réponses. Une ancienne gardienne vous regarde depuis son balcon.`,[
A('Observer les affichages du chantier',`Le permis affiche une date récente. Une photographie sur votre téléphone montre pourtant le même logo sur la réunion des habitants avant l’incendie.

La gardienne vous confirme que le projet de vente n’était pas secret pour tout le monde. Ce qui restait caché, c’était la vitesse à laquelle certains voulaient obtenir un bâtiment vide.`,{effect:{flag:'early_project',proof:1},note:'Le projet de vente était connu avant l’incendie ; les démarches de relogement ont accéléré ensuite.'}),
A('Demander à la gardienne ce qu’elle a conservé',`Elle descend avec un plan usé. Elle ne veut pas qu’on photographie son visage et vous le dit sans détour. Vous acquiescez avant de tendre la main.

Le plan lui servait à expliquer aux pompiers quel escalier était accessible. Elle a conservé des copies parce que, longtemps après, des habitants lui demandaient encore quelle porte avait été fermée.`,{item:'map',effect:{rel:{sam:1}},note:'L’ancienne gardienne accepte de partager le plan, à condition de ne pas être photographiée.'}),
A('Chercher la porte de la photo',`La porte 27 n’existe plus. Le mur a été abattu. Vous comparez pourtant l’angle des fenêtres et retrouvez le palier sur le plan.

Le bâtiment de la photographie n’est pas celui où le feu a commencé. Plusieurs familles de ce second bâtiment ont pourtant reçu des courriers les présentant comme sinistrées sans possibilité de retour.`,{test:['observation',3],success:'L’alignement confirme le bâtiment B. Vous avez une question précise à poser aux archives.',fail:'La façade a trop changé pour conclure. Vous gardez le rapprochement comme une hypothèse.',successEffect:{flag:'building_b',proof:1},note:'Il faut distinguer les habitants du bâtiment incendié et ceux du bâtiment B voisin.'})]),
L('Le square','Des souvenirs en circulation',`Deux personnes jouent aux cartes sur une table humide. Elles reconnaissent Sam sur la photo et acceptent que vous restiez quelques minutes. Elles vous préviennent : elles ne veulent pas parler à sa place.`,[
A('Parler des courriers revenus',`Les lettres recommandées arrivaient encore aux Ormes après les départs. Le facteur ne pouvait les remettre à personne. Dans les dossiers, l’absence de réponse avait parfois été notée comme une absence de contestation.

Une femme vous montre la photo d’un avis de passage collé sur la palissade. Il est resté là jusqu’à la pluie suivante.`,{note:'Des lettres étaient envoyées aux anciennes adresses, puis l’absence de réponse servait à clore les dossiers.',effect:{flag:'mail_loop',proof:1}}),
A('Écouter une version qui contredit Sam',`Un ancien voisin affirme que tout le monde savait ce qu’il signait. Puis il précise qu’il n’était pas à Belrive et qu’il avait reçu son propre formulaire trois semaines plus tard, chez sa sœur.

Les deux récits ne décrivent pas le même moment. Vous les gardez séparés. Le voisin se détend lorsque vous cessez de chercher qui ment.`,{effect:{skill:{empathy:1}},note:'Les habitants n’ont pas tous signé au même moment ni dans les mêmes conditions.'}),
A('Montrer le nom d’Inès',`Ils se souviennent d’elle, surtout parce qu’elle revenait quand un document manquait au lieu d’expliquer aux gens qu’ils auraient dû mieux le garder. Un homme vous demande si elle va bien.

Vous dites que vous cherchez à le savoir. Il vous donne l’adresse du dépôt technique où elle avait rencontré Malik. Vous n’aviez pas eu besoin de prétendre en savoir davantage.`,{effect:{flag:'malik_address',rel:{ines:1}},note:'Inès rencontrait Malik au dépôt technique du canal.'})])],
D('Une voix dans le dossier.',`Sam vous rattrape à l’angle de la rue. « Si vous racontez ce que j’ai dit, je veux le lire avant. Pas pour le rendre joli. Pour que ce soit bien ce que j’ai dit. »`,[
C('Lui promettre de relire son témoignage',`Vous vous mettez d’accord sur les mots : relire ne signifie pas effacer une information qui dérange, mais vérifier ce qui lui est attribué. Sam vous donne son numéro.`,{flag:'sam_review',rel:{sam:2},promise:{id:'samreview',text:'Faire relire à Sam la version de son témoignage avant diffusion.',due:21,who:'sam'}}),
C('Ne conserver que les faits vérifiables',`Vous lui montrez les lignes de votre carnet et retirez les phrases trop personnelles. Sam approuve ce que vous gardez, sans se sentir obligé d’en dire plus.`,{flag:'sam_facts',rel:{sam:1},proof:1}),
C('Lui proposer de parler directement à Nora',`Sam hésite, puis accepte une rencontre sans appareil photo. Vous transmettez sa condition avant son numéro. Nora confirme qu’elle la respectera.`,{flag:'sam_nora',rel:{sam:1,nora:1}}),
C('Garder une copie complète sans promesse',`Vous expliquez honnêtement que vous ne savez pas encore comment vous utiliserez vos notes. Sam préfère vous entendre le dire, mais reprend la photographie avant de partir. Vous en avez toujours votre copie.`,{flag:'sam_distance',rel:{sam:-1},exposure:1})]));

B('Le bruit des machines.','Le dépôt du canal','Mardi',600,90,
`Le dépôt technique sent la pluie chaude sur le métal. Des agents réparent des barrières, changent des ampoules et chargent un utilitaire dont la porte ferme mal. Au milieu de cette activité ordinaire, Malik paraît attendre votre visite depuis des jours.

« Inès m’a dit que vous poseriez des questions compliquées avec un air de vous excuser. » Il ne sourit qu’après vous avoir vu sourire. Il vous propose de marcher autour du bâtiment plutôt que de rester dans le bureau.

Il a travaillé aux Ormes. Il a signalé un problème. Depuis, plusieurs personnes utilisent sa signature pour raconter des choses différentes.`,
'Distinguer le défaut technique, les responsabilités et les raccourcis.',[
L('Malik','Un nom sur un rapport',`Il porte un gilet sans logo. Son ancien employeur a changé de nom ; son travail, lui, n’a presque pas changé. Il veut savoir si vous allez lui demander s’il a « provoqué tout ça ».`,[
A('Qu’avais-tu signalé exactement ?',`Le système d’extraction de la cage B fonctionnait par intermittence. Malik avait demandé un essai complet avec accès aux logements. L’accès avait été refusé, puis le ticket avait été fermé par un compte partagé.

Il vous laisse une copie du relevé. « Ma signature dit que j’ai vu un défaut. Pas que j’ai certifié que tout allait bien. »`,{item:'maintenance',effect:{rel:{malik:1}},note:'Malik avait demandé un essai de l’extraction. L’accès lui a été refusé.'}),
A('Quelqu’un t’a-t-il demandé de te taire ?',`Personne ne l’a menacé dans une ruelle. On lui a expliqué qu’un mauvais mot pouvait coûter un contrat à toute son équipe. On lui a demandé s’il voulait vraiment mettre ses collègues en difficulté pour un défaut « déjà pris en charge ».

Il a continué à conserver ses relevés. Il n’a pas insisté par une nouvelle lettre. Les deux choses sont vraies.`,{effect:{skill:{empathy:1},rel:{malik:1}},note:'Les pressions sur Malik passaient par son emploi et ceux de ses collègues.'}),
A('Lui demander une preuve d’accès',`Malik vous tend son ancien badge, désactivé et découpé. Il vous demande de le rapporter à sa sœur au garage quand vous n’en aurez plus besoin. Il tient à cet objet pour une raison que vous ne lui demandez pas encore.

« On ne s’en sert pas pour entrer quelque part, d’accord ? » Vous le lui promettez.`,{item:'badge',effect:{promise:{id:'badge',text:'Rendre le badge désactivé à la sœur de Malik au garage.',due:11,who:'malik'},rel:{malik:1}},note:'Le badge de Malik est désactivé ; il vous demande de le rendre au garage.'})]),
L('Les relevés papier','Les traces des interventions',`Dans le bureau, une responsable vous laisse consulter les copies dont Malik est l’auteur. Elle reste présente. Vous n’avez accès ni aux dossiers des autres agents ni aux ordinateurs du service.`,[
A('Comparer les copies carbone',`Sur la copie de Malik, le défaut est ouvert. Sur l’extrait informatique, il est fermé la veille de l’essai prévu. Une note mentionne « résolution administrative ».

La responsable reconnaît que cette expression ne prouve pas une réparation. Elle vous autorise à noter sa définition exacte et à la citer sans son nom personnel.`,{effect:{flag:'admin_resolution',proof:2},note:'« Résolution administrative » signifie fermeture du ticket, pas vérification d’une réparation.'}),
A('Reconstituer les horaires',`Vous alignez les relevés sur le bureau. L’électricité avait été coupée sur une ligne de service deux jours avant le feu, mais pas sur l’éclairage du hall. La distinction compte.

Les documents disponibles ne permettent toujours pas de dire si le défaut a aggravé l’incendie. Vous notez une question d’expertise plutôt qu’une conclusion séduisante.`,{test:['technique',3],success:'Vous séparez correctement les deux circuits et relevez une référence utile à un expert.',fail:'La responsable corrige votre lecture. Vous évitez une erreur, au prix d’un peu de temps supplémentaire.',successEffect:{flag:'circuits',proof:1},effect:{skill:{technique:1}},note:'Le lien entre extraction défaillante et conséquences de l’incendie nécessiterait une expertise indépendante.'}),
A('Demander pourquoi les papiers existent encore',`Le dépôt conserve les doubles pour les litiges de garantie. Personne n’avait pensé à les réclamer pour le dossier des habitants. Les documents n’étaient pas cachés dans un coffre : ils étaient classés dans une catégorie qui intéressait d’autres services.

Malik vous regarde comprendre. « Parfois le silence, c’est juste tout le monde dans son propre tiroir. »`,{effect:{flag:'paper_retention',skill:{observation:1}},note:'Les doubles de maintenance sont conservés pour les garanties, séparément des dossiers de relogement.'})]),
L('Le canal derrière le dépôt','Une conversation sans bureau',`Le chemin longe une eau brune. Malik vous rejoint pendant sa pause. Il n’a plus rien de matériel à vous donner ; il veut savoir ce que vous comptez faire de son nom.`,[
A('Lui expliquer ce que vous ne savez pas',`Vous lui dites que vous cherchez Inès et des décisions administratives, pas un coupable à désigner avant le déjeuner. Il vous reprend sur un détail du relevé ; vous corrigez votre note devant lui.

Le geste compte davantage que votre discours. Il accepte de répondre à Nora si elle distingue ses observations de ses suppositions.`,{effect:{rel:{malik:2},flag:'malik_contact'},note:'Malik accepte une prise de contact par Nora si ses observations sont citées précisément.'}),
A('Demander où Inès allait ensuite',`Inès voulait voir Élise aux archives municipales. Elle pensait retrouver la première version d’une annexe de vente. Malik avait trouvé cette piste excessivement lente.

« Elle m’a dit : si on n’a que des gens qui se souviennent, on leur demandera de se souvenir jusqu’à les épuiser. Trouvons aussi du papier. »`,{effect:{flag:'archive_lead'},note:'Inès cherchait aux archives la première version d’une annexe de vente.'}),
A('Parler de votre père',`Malik l’a connu. Il ne le décrit ni comme un héros ni comme un homme corrompu. Votre père avait peur des conflits et savait très bien organiser un chantier. Les deux traits n’étaient pas indépendants.

« Il me disait de tout garder. Je ne sais pas s’il gardait tout lui-même. » Vous recevez la phrase sans chercher à la résoudre immédiatement.`,{effect:{flag:'father_malik',skill:{calm:1}},note:'Malik connaissait votre père et son conseil de conserver les écrits.'})])],
D('Une signature, plusieurs histoires.',`Nora vous demande par message si elle peut nommer Malik dans sa prochaine demande de documents. Le citer peut donner du poids à la demande ; cela l’expose aussi.`,[
C('Demander d’abord l’accord de Malik',`Vous l’appelez. Il accepte que son nom figure dans une demande précise, pas dans un portrait public. Vous transmettez exactement cette limite à Nora.`,{flag:'malik_consent',rel:{malik:1,nora:1},proof:1}),
C('Utiliser seulement les références des rapports',`Nora reformule sa demande autour des numéros d’intervention. C’est moins personnel, plus difficile à écarter comme un conflit de salariés. Malik ne sera pas cité à ce stade.`,{flag:'malik_anonymous',rel:{malik:1},proof:1}),
C('Nommer Malik sans attendre sa réponse',`Vous gagnez du temps. Quand Malik voit la demande circuler, il vous demande pourquoi vous n’avez pas attendu. Il continue à vous parler, mais ne vous confie plus aussi facilement ses hésitations.`,{flag:'malik_exposed',rel:{malik:-2},exposure:2,proof:1}),
C('Garder les relevés hors de la demande',`Vous voulez encore comprendre leur rôle. Nora vous prévient qu’un délai peut coûter l’accès à certaines versions. Vous acceptez de porter ce risque plutôt que de le laisser invisible.`,{flag:'maintenance_held',rel:{nora:-1},skill:{calm:1}})]));

B('Ce qu’on garde.','Le local associatif','Mardi',720,90,
`Le local doit rendre ses clés ce soir. Des bénévoles trient des cartons sur le trottoir. L’immeuble voisin accueillera bientôt une salle de sport privée ; une affiche annonce déjà « un nouveau lieu de vie ».

Vous avez du mal à demander vos documents au milieu des photographies, des manteaux et des chaises. Rien n’est rangé selon l’importance que les gens y attachent. Une bénévole tient contre elle une plante dont personne ne connaît le propriétaire.

Sam vous a indiqué cet endroit. Lucie aussi y passait parfois. Une femme vous reconnaît comme la personne qu’Inès attendait. « Vous arrivez à temps. Pour certaines choses, au moins. »`,
'Récupérer ce qui peut encore l’être et décider ce que vous emportez.',[
L('L’étagère du fond','Les affaires laissées',`Les boîtes portent des noms, des descriptions ou de simples points de couleur. La responsable accepte votre aide, à condition que vous ne preniez pas de photo générale. Ces cartons ne sont pas une exposition.`,[
A('Récupérer la boîte bleue',`Elle est plus lourde que prévu. À l’intérieur, les médicaments sont séparés des papiers par une serviette de toilette. La boîte contient aussi une clé qui n’ouvre plus rien et la carte d’une bibliothèque fermée.

Vous appelez Sam pour convenir de la remise. Il vous demande si la serviette est toujours là avant de parler des documents.`,{effect:{fulfill:'bluebox',flag:'bluebox_returned',rel:{sam:1}},note:'La boîte bleue a été remise à Sam et à sa mère.'}),
A('Aider à identifier les cartons anonymes',`Vous ouvrez les cartons avec la responsable, sans emporter leur contenu. Des gens ont laissé un indice pour retrouver leurs affaires : une marque de lessive, le prénom d’un chat, une date d’anniversaire.

La tâche ne rapproche pas directement d’Inès. Elle vous apprend cependant pourquoi des listes officielles propres et complètes peuvent correspondre à des vies devenues introuvables.`,{effect:{skill:{empathy:1},rel:{sam:1}},note:'Le local utilise des indices du quotidien pour identifier les affaires dont les dossiers ont été perdus.'}),
A('Demander ce qu’Inès avait mis de côté',`Un dossier attend sous une lampe cassée. Inès avait réservé des enveloppes revenues sans être ouvertes. La responsable vous en laisse relever les dates, mais garde les originaux pour leurs destinataires.

Plusieurs délais de réponse expiraient avant que le local reçoive ces courriers. Le problème n’est plus seulement un retard isolé.`,{effect:{flag:'returned_letters',proof:2},note:'Plusieurs lettres de contestation sont arrivées au local après l’expiration de leur délai de réponse.'})]),
L('La responsable','Une mémoire de travail',`Elle s’appelle Farida. Son bureau tient maintenant dans un sac de courses. Elle se souvient des demandes d’Inès parce qu’Inès ne disait jamais « les gens » quand elle pouvait dire un prénom.`,[
A('Parler des formulaires signés',`Farida décrit des tables installées dans le gymnase, des personnes épuisées et des formulaires copiés plusieurs fois. Certains agents expliquaient tout. D’autres demandaient une signature en montrant seulement la dernière page.

Elle refuse de dire que tous les habitants ont été trompés de la même façon. « Si vous mettez tout ensemble, ils trouveront un seul contre-exemple et jetteront le reste. »`,{effect:{flag:'form_conditions',proof:1},note:'Les conditions de signature variaient. Il faut documenter chaque cas plutôt que généraliser.'}),
A('Demander pourquoi le local ferme',`La convention d’occupation arrivait à son terme. Il aurait fallu une décision explicite pour la prolonger. Chaque service a attendu qu’un autre se prononce, jusqu’à ce que la fermeture semble naturelle.

Farida a conservé les messages. Elle vous autorise à citer ce circuit d’attente, mais pas à présenter la fermeture comme une expulsion dont elle n’a pas la preuve.`,{effect:{skill:{observation:1}},note:'La fermeture du local résulte d’une convention non renouvelée ; son intention politique reste à établir.'}),
A('Lui demander ce dont elle a besoin',`D’une camionnette, de bras, et que personne ne transforme son dernier jour ici en conférence de presse. Vous consacrez une partie de votre temps à porter deux tables.

En revenant, Farida vous glisse le numéro d’Élise. « Elle peut être raide. Ce n’est pas contre vous. Les gens lui demandent souvent de risquer son travail puis l’oublient. »`,{cost:20,effect:{flag:'helped_farida',rel:{elise:1},skill:{calm:1}},note:'Farida vous a donné le numéro direct d’Élise aux archives.'})]),
L('Le carton de Lucie','Une piste consentie',`Lucie avait donné des fournitures au local. Son carton porte le nom de la boulangerie où elle travaille maintenant. Farida téléphone devant vous et obtient son accord pour vous remettre ce qui vous concerne.`,[
A('Lire le mot laissé par Lucie',`« Inès, je ne veux pas que tu viennes seule à Belrive. On ne menace pas toujours les gens. Parfois on leur propose une solution tellement raisonnable qu’ils n’osent plus repartir. »

Au dos, Lucie a noté les heures auxquelles elle travaille. Ce n’est pas un message clandestin : elle préparait une rencontre en tenant compte de son emploi du temps.`,{effect:{flag:'lucie_warning'},note:'Lucie craignait qu’Inès aille seule à Belrive.'}),
A('Conserver l’enregistrement autorisé',`Farida vous remet une microcassette. Lucie a accepté que vous l’écoutiez, mais souhaite être consultée avant toute diffusion. Vous notez la condition sur l’étiquette de la pochette.

Le boîtier est fendu. Il vous faudra un lecteur et un endroit où prendre le temps d’entendre des paroles ordinaires avant de décider lesquelles sont importantes.`,{item:'tape',effect:{promise:{id:'lucieconsult',text:'Consulter Lucie avant de diffuser son enregistrement.',due:21,who:'elise'}},note:'Lucie a autorisé l’écoute de sa cassette, sous réserve d’un accord avant diffusion.'}),
A('Demander si Lucie était suivie',`Farida ne l’a pas vue suivie. Elle a vu Lucie changer plusieurs fois d’itinéraire et regarder les voitures garées. Ce n’est pas exactement la même information.

Vous ajoutez cette distinction au carnet. Elle paraît inutile sur le moment ; Farida vous remercie pourtant de ne pas avoir transformé sa prudence en certitude.`,{effect:{skill:{observation:1}},note:'Lucie semblait inquiète, mais Farida ne confirme aucune filature.'})])],
D('Une heure qui manque.',`Une camionnette est arrivée en retard. Farida pourrait encore utiliser votre aide, mais les archives fermeront plus tôt aujourd’hui. Personne ne peut vous dire ce que vous perdrez en choisissant.`,[
C('Rester aider jusqu’au chargement',`Vous portez les derniers cartons. Quand le volet tombe, Farida vous serre la main avec une attention nouvelle. Vous arrivez ensuite aux archives avec moins de temps, mais un nom qu’on peut recommander.`,{flag:'stayed_local',rel:{elise:1,sam:1},skill:{empathy:1}}),
C('Partir aux archives en expliquant pourquoi',`Farida regarde l’heure et vous dit d’y aller. Vous lui donnez le numéro d’un voisin capable de remplacer vos bras. Vous ne faites pas semblant que votre départ ne lui coûte rien.`,{flag:'archive_priority',skill:{observation:1}}),
C('Demander à Nora de prendre le relais',`Nora vient sans appareil. Elle aide au chargement et repart avec les mains couvertes de poussière. Plus tard, Farida lui répondra peut-être pour cette raison plutôt que pour son journal.`,{flag:'nora_helped',rel:{nora:1,elise:1}}),
C('Organiser un retrait pour le lendemain',`Vous négociez un petit délai pour les boîtes non identifiées. Le propriétaire accepte vingt-quatre heures, à condition que vous en soyez le contact. Vous aurez encore quelque chose à tenir demain.`,{flag:'extra_day',promise:{id:'localpickup',text:'Organiser le dernier retrait des boîtes avant mercredi soir.',due:13,who:'sam'}})]));

B('La page manquante.','Les archives municipales','Mardi',840,100,
`Élise vous fait entrer par une porte latérale parce que l’accueil est déjà en train de fermer. Elle n’a pas oublié votre père. « Il rapportait les plans avec du café sur les coins. Vous faites pareil ? »

Elle vous laisse déposer vos affaires dans un casier et vous explique les règles de consultation. Ici, une cote correcte peut ouvrir davantage qu’une insistance émue. Elle ne peut pas faire apparaître un document qui n’a jamais été versé aux archives.

Sur la table attend un dossier de vente. Sa couverture porte deux dates qui ne semblent pas appartenir à la même histoire.`,
'Retrouver les versions antérieures du projet des Ormes.',[
L('Élise','Les règles et leurs marges',`Élise préfère les questions précises. Elle répond quand elle sait et vous dit où elle chercherait quand elle ne sait pas. Sa manière de vous aider ne ressemble pas à un cadeau.`,[
A('Quelle version était disponible avant le feu ?',`Elle apporte une copie de la promesse de vente. L’opération existait déjà ; l’incendie a changé le calendrier et la qualification de plusieurs dépenses. Une annexe mentionne des réserves notariales.

Élise ne vous laisse pas emporter l’original. Elle établit une copie avec sa cote, sa date de reproduction et le nombre de pages.`,{item:'deed',effect:{rel:{elise:1}},note:'Une copie datée de la promesse de vente est disponible aux archives.'}),
A('Qu’avait demandé Inès ?',`Inès cherchait les instructions de relogement, mais aussi la liste des personnes ayant demandé à les consulter. Une demande avait été retirée au nom de Lucie, puis redéposée par une association qui n’existe plus.

Élise n’en tire aucune conclusion. Elle vous donne la chronologie et souligne les dates que vous pouvez vérifier autrement.`,{effect:{flag:'withdrawn_request'},note:'Une demande de consultation de Lucie avait été retirée puis redéposée par une ancienne association.'}),
A('Pourquoi prenez-vous ce risque ?',`Élise ferme le dossier. « Quel risque ? Vous consultez des documents communicables. Si je vous aide, ce n’est pas forcément parce que je brave un interdit. »

Vous comprenez la fatigue de devoir toujours être l’héroïne ou le verrou d’un récit. Vous reprenez votre question : que peut-elle légalement vous montrer ? Sa réponse devient beaucoup plus longue.`,{effect:{rel:{elise:2},skill:{empathy:1}},note:'Élise distingue l’aide à la consultation et la divulgation de documents protégés.'})]),
L('Les versions de l’annexe','Du papier qui change',`Deux jeux de pages sont placés côte à côte. Les numéros ne se suivent pas tout à fait. Vous avez le droit de prendre des notes et des photographies des parties communicables.`,[
A('Comparer les numéros de pages',`La version publique saute de la page huit à la page dix. La copie antérieure contient une page neuf : l’information des habitants devait être justifiée avant toute libération de fonds.

Le dossier ne dit pas qui a retiré la page. Il dit qu’elle existait et qu’elle a disparu d’un jeu de copies. C’est déjà beaucoup.`,{test:['observation',3],success:'Vous relevez la cote des deux versions et les dates nécessaires pour documenter l’écart.',fail:'Élise vous fait remarquer la page absente avant votre conclusion. Vous obtenez la référence, mais pas une seconde vérification indépendante.',successEffect:{proof:2,flag:'missing_page'},effect:{skill:{observation:1}},note:'La page sur l’information préalable des habitants manque dans la version publique.'}),
A('Vérifier les signatures',`Les signatures de la vente sont authentifiées, mais une note d’accompagnement n’est signée que d’initiales. Une personne a validé sa circulation ; cela ne signifie pas qu’elle en a rédigé chaque ligne.

Vous dessinez trois cases : auteur, valideur, destinataire. Les confondre rendrait le dossier plus simple, et beaucoup plus fragile.`,{effect:{proof:1,flag:'roles_separated'},note:'Il faut distinguer la rédaction, la validation et la réception des instructions.'}),
A('Chercher le bénéficiaire économique',`La société propriétaire est détenue par une filiale qui utilise la même adresse qu’un cabinet de conseil. Les associés ne portent pas les noms des élus que vous imaginiez trouver.

L’intérêt économique existe sans avoir besoin d’une parenté secrète. Élise vous montre comment obtenir des documents publics sans transformer une homonymie en preuve.`,{effect:{skill:{technique:1},flag:'economic_chain'},note:'La chaîne de propriété passe par des filiales ; aucune parenté avec un élu n’est démontrée.'})]),
L('Le bordereau de versement','La trace d’un autre dossier',`Le bordereau décrit ce qui a été envoyé aux archives. Certaines pièces restent dans les services d’origine. L’absence d’une pièce ici peut signifier qu’elle est ailleurs, pas qu’elle a été détruite.`,[
A('Chercher le dossier de votre père',`Son nom apparaît sur une demande de vérification technique, sans réponse jointe. Il avait noté que le classement définitif devait attendre un compte rendu. La pochette s’arrête là.

Élise vous conseille de chercher chez vous les copies personnelles qu’il gardait parfois. Elle ne prétend pas savoir ce qu’il a fait ensuite.`,{effect:{flag:'father_request'},note:'Votre père avait demandé une vérification technique ; aucune réponse n’est jointe au dossier archivé.'}),
A('Trouver le service chargé de Belrive',`Les documents de transport sont suivis par un centre d’hébergement qui partage ses locaux avec une clinique privée. Le nom « Belrive » désigne plusieurs services que les formulaires mélangent.

Élise vous note un numéro d’accueil. « Demandez les admissions d’urgence de cette date. Si vous dites seulement clinique, on vous répondra une vérité qui ne répond pas à votre question. »`,{effect:{flag:'belrive_service'},note:'Belrive comprend un hébergement d’urgence et une clinique. Il faut demander le bon service.'}),
A('Déposer une demande de conservation',`Vous remplissez un formulaire pour demander que les versions intermédiaires ne soient pas éliminées selon le calendrier ordinaire. Le résultat n’est pas garanti, mais la demande sera datée.

Élise corrige une référence et vous remet un reçu. Le papier est moins émouvant qu’une confidence. Il pourra survivre plus longtemps qu’elle.`,{effect:{flag:'retention_requested',proof:1,rel:{elise:1}},note:'Une demande datée de conservation des versions intermédiaires a été déposée.'})])],
D('La copie et la personne.',`Élise vous autorise à photographier une annexe communicable. Un document personnel d’un habitant apparaît en dessous. Vous pourriez le capturer dans le même mouvement.`,[
C('Photographier seulement l’annexe autorisée',`Vous recouvrez la page personnelle avant de cadrer. Élise le remarque. Elle vous donne alors la référence exacte de la pièce protégée, pour que vous puissiez en demander l’accès par la bonne voie.`,{flag:'archive_care',rel:{elise:2},proof:1}),
C('Demander comment obtenir l’autre pièce',`La procédure est plus lente. Un mandat de la personne concernée permettrait de consulter certaines informations. Vous repartez avec une question à poser, pas un secret volé.`,{flag:'consent_route',skill:{empathy:1},rel:{elise:1}}),
C('Photographier les deux pages discrètement',`Le déclenchement est silencieux, mais votre geste ne l’est pas. Élise vous demande de ranger le téléphone. Vous avez une image ; vous perdez une interlocutrice qui aurait pu vous aider à l’interpréter.`,{flag:'archive_breach',proof:1,exposure:2,rel:{elise:-3}}),
C('Ne prendre aucune photo et garder les références',`Vous recopiez les cotes. C’est plus lent, mais les originaux resteront consultables et votre carnet dit exactement d’où vient chaque information. Vous pourrez revenir avec quelqu’un d’autre.`,{flag:'reference_only',proof:1,skill:{calm:1}})]),{echo:[{flag:'helped_farida',text:'Élise a reçu un message de Farida. Elle vous offre quelques minutes de plus sans le présenter comme une faveur.'},{flag:'stayed_local',text:'Vous arrivez à la fin de la permanence. Élise vous propose de vous concentrer sur les pièces les plus utiles.'}]});

B('Le pain du soir.','La boulangerie du canal','Mardi',960,90,
`La chaleur du four atteint la rue. Lucie a retiré son bonnet bleu ; ses cheveux courts semblent encore en garder la forme. Elle vous reconnaît au premier regard et vous demande si vous avez mangé.

Vous voudriez lui demander pourquoi personne ne commence par répondre à votre inquiétude. Puis vous voyez ses mains. Elle tient un plateau vide si fort que les jointures blanchissent.

« J’ai déposé l’enveloppe. Pas le carnet. C’est Inès qui m’a fait changer le numéro. Elle avait aperçu quelqu’un qui connaissait l’ancienne consigne. »`,
'Entendre Lucie et vérifier ce que sa mémoire peut soutenir.',[
L('Lucie','Une parole longtemps retenue',`Elle peut vous parler pendant sa pause, avant la dernière fournée. Vous avez assez de temps pour deux sujets. Elle vous demande de ne pas utiliser son silence pour remplir les blancs à sa place.`,[
A('Où avez-vous vu Inès pour la dernière fois ?',`Devant le centre Belrive, hier après-midi. Inès voulait vérifier une liste d’admissions. Lucie lui a remis une copie partielle, puis est retournée travailler. À dix-sept heures, Inès a téléphoné : elle avait trouvé une personne qui pouvait expliquer les corrections.

« Elle n’avait pas l’air paniquée. Elle avait l’air de vouloir faire trop de choses avant la fermeture. »`,{effect:{flag:'ines_belrive',rel:{ines:1}},note:'Lucie a vu Inès à Belrive lundi après-midi. Inès cherchait l’auteur de corrections du registre.'}),
A('Que faisiez-vous aux Ormes ?',`Lucie coordonnait l’accueil d’urgence pour Aster. Elle distribuait des couvertures, organisait les trajets et remettait des formulaires préparés par d’autres. Elle a compris progressivement que les signatures changeaient de fonction d’une version à l’autre.

Elle n’a pas tout arrêté. Elle ne vous demande pas de qualifier cela à sa place. Elle veut expliquer les décisions qu’elle a prises.`,{effect:{flag:'lucie_role',skill:{empathy:1}},note:'Lucie travaillait pour Aster à l’accueil d’urgence et a remis des formulaires aux habitants.'}),
A('Accepteriez-vous de signer un témoignage ?',`Elle accepte pour les faits qu’elle a personnellement observés. Elle souhaite qu’un avocat conserve les pièces privées et que l’adresse de sa fille disparaisse des copies destinées à la presse.

Vous convenez d’une nouvelle rencontre pour relire ensemble. Sa voix ne devient pas plus assurée quand elle dit oui. Le courage ne corrige pas la peur.`,{effect:{flag:'lucie_will_sign',promise:{id:'lucieread',text:'Revoir Lucie pour relire et signer son témoignage.',due:13,who:'elise'}},note:'Lucie accepte de témoigner après relecture, avec protection des coordonnées de sa famille.'})]),
L('La cassette','Ce que les voix disent vraiment',`La patronne vous prête un ancien lecteur de dictée. Lucie vous autorise à écouter dans la réserve, porte ouverte. Elle reste assez près pour corriger un nom mal entendu.`,[
A('Écouter le début de la réunion',`Un cadre explique qu’il faut « fermer les situations » avant la fin du trimestre. Une participante demande si cela signifie reloger les gens. Il répond que cela signifie ne plus avoir de dossiers ouverts.

La nuance est nette, mais le ton n’est pas théâtral. Des tasses s’entrechoquent. Quelqu’un demande si la salle sera disponible le mercredi suivant.`,{item:'tape',effect:{flag:'tape_heard',proof:1},note:'La réunion distingue les situations réellement résolues et les dossiers administrativement clos.'}),
A('Écouter la discussion sur les formulaires',`Une voix demande ce qu’il faut faire quand une personne ne comprend pas la page de renonciation. « Donner l’information utile », répond un homme. Une autre voix insiste : « Utile pour qui ? »

Lucie s’identifie comme l’auteure de cette seconde question. Elle ne reconnaît pas avec certitude la première voix. Vous ne lui soufflez pas de nom.`,{effect:{flag:'form_recording',proof:2},note:'La cassette contient une discussion sur l’explication de la renonciation, mais toutes les voix ne sont pas identifiées.'}),
A('Vérifier les coupures',`Le lecteur claque entre deux portions. Lucie avait arrêté l’appareil pendant une discussion privée. Il ne s’agit donc pas d’une captation continue.

Vous lui demandez de noter les interruptions. Cela rendra l’enregistrement moins commode à utiliser, mais plus honnête. Elle accepte et semble soulagée de ne pas avoir à défendre une perfection qu’elle n’a jamais promise.`,{test:['technique',3],success:'Vous repérez une seconde coupure et établissez une notice d’écoute précise.',fail:'Le vieux lecteur défile mal. Vous notez la limite technique au lieu de prétendre avoir contrôlé toutes les interruptions.',successEffect:{flag:'tape_checked',proof:1},effect:{skill:{technique:1},rel:{elise:1}},note:'L’enregistrement comporte des coupures assumées ; une notice doit accompagner sa diffusion.'})]),
L('La cour derrière le four','Les conditions de la confiance',`La cour est petite, encombrée de cagettes. Lucie y fume une cigarette qu’elle laisse souvent s’éteindre. La conversation quitte les faits pour toucher à ce qui les rend difficiles à dire.`,[
A('Lui parler de votre inquiétude pour Inès',`Vous admettez que vous avez envie de croire immédiatement la personne qui vous donnera une adresse. Lucie vous conseille de vous méfier de ce soulagement, pas de toutes les personnes.

Elle vous écrit le nom d’un hébergement lié à Belrive. « C’est une piste. Je ne vous promets pas qu’elle y soit. » La précision vous agace autant qu’elle vous aide.`,{effect:{flag:'belrive_annex',rel:{ines:1}},note:'Une annexe d’hébergement de Belrive pourrait être liée aux corrections qu’Inès suivait.'}),
A('Lui proposer de protéger sa famille',`Vous ne pouvez pas garantir qu’aucune information ne circulera. Vous pouvez limiter vos copies et demander les autorisations avant de transmettre. Lucie préfère cette promesse modeste à une assurance impossible.

Vous lui demandez aussi comment elle souhaite être jointe. Elle choisit les heures de fermeture, quand elle n’a pas à répondre devant ses collègues.`,{effect:{flag:'lucie_contact_rules',rel:{elise:1},promise:{id:'lucieprivacy',text:'Retirer les coordonnées privées de Lucie des documents diffusés.',due:21,who:'elise'}},note:'Lucie souhaite être contactée après la fermeture de la boulangerie.'}),
A('Demander ce qu’elle n’a pas encore dit',`Elle regarde longtemps la fenêtre du fournil. « J’ai signé un papier que j’aurais dû relire. Après, il m’a fallu des mois pour accepter que ce n’était pas seulement une maladresse. »

Elle ne vous montre pas encore ce papier. Vous lui laissez la possibilité de revenir sur le sujet sans avoir à lutter contre votre impatience.`,{test:['empathy',3],success:'Elle vous promet d’apporter le formulaire lors de votre prochaine rencontre.',fail:'Votre question arrive trop tôt. Elle retourne au four, sans vous demander de partir de sa vie.',successEffect:{flag:'lucie_form',rel:{elise:1}},note:'Lucie a elle-même signé une pièce qu’elle estime aujourd’hui problématique.'})])],
D('Ce qu’on laisse circuler.',`Nora veut utiliser un court extrait de la cassette pour obtenir une réaction d’Aster. Lucie vous regarde attendre votre propre réponse.`,[
C('Attendre l’accord précis de Lucie',`Vous faites écouter l’extrait choisi à Lucie avant de le transmettre. Elle accepte une question écrite résumant le passage, pas encore l’envoi du fichier. Nora respecte la limite.`,{flag:'lucie_consent',fulfill:'lucieconsult',rel:{nora:1,elise:1}}),
C('Transmettre seulement une transcription anonymisée',`Vous retirez les noms et indiquez les coupures. Nora aura de quoi poser des questions sans faire circuler une voix identifiable. Lucie valide cette étape limitée.`,{flag:'tape_anonymous',fulfill:'lucieconsult',proof:1}),
C('Envoyer l’extrait sans attendre',`Le fichier quitte votre téléphone. La réponse du service de communication arrive très vite, demandant l’origine et le contexte complet. Lucie éteint sa cigarette et vous demande de ne plus enregistrer votre échange.`,{flag:'tape_sent',rel:{elise:-2,nora:-1},exposure:2,proof:1}),
C('Garder l’enregistrement pour un avocat',`Lucie préfère une déposition à une fuite. Nora vous dit qu’elle pourra travailler avec les pièces publiques pendant ce temps. La cassette retourne dans sa pochette, avec ses limites écrites dessus.`,{flag:'tape_lawyer',fulfill:'lucieconsult',rel:{elise:1}})]));

B('La copie locale.','L’appartement familial','Mardi',1080,105,
`Vous rentrez avec l’impression d’avoir rempli votre tête et vidé votre journée. L’appartement est silencieux. Un voisin a déposé sur le paillasson un petit paquet adressé au surnom qu’Inès emploie pour vous.

À l’intérieur, une clé USB et un mot : « Ce n’est pas tout. C’est ce que je peux te laisser sans laisser les autres avec. » La date d’envoi est postérieure à l’enveloppe de la gare.

Un ordinateur ancien est encore sur le bureau de votre père. Vous pouvez lire la copie sans vous connecter à aucun service extérieur. Pour une fois, la difficulté est exactement à votre portée.`,
'Ouvrir la sauvegarde d’Inès et prendre soin de ce qu’elle contient.',[
L('L’ordinateur du bureau','Un code partagé',`La clé contient une archive locale protégée par un code. Le petit papier attaché à l’anneau dit « notre carnet ». Vous avez choisi ce code au début de votre histoire. Votre dossier le conserve.`,[
A('Ouvrir l’archive avec mon code',`Le programme vous demande quatre chiffres. L’écran ne vous presse pas ; vous pouvez consulter votre carnet autant que nécessaire. Cette copie appartient à Inès, et le mot qui l’accompagne vous en autorise l’ouverture.`,{item:'drive',input:{kind:'code',prompt:'Entrez le code fictif de quatre chiffres choisi pour votre carnet.'},success:'L’archive s’ouvre. Elle contient des formulaires et un message d’Inès : « Si tu lis ça, j’ai préféré me déplacer sans téléphone. Ce n’est pas contre toi. »',fail:'Le code est refusé. Une seconde copie non chiffrée contient les références essentielles, mais les documents complets resteront à vérifier auprès des sources.',successEffect:{flag:'archive_open',proof:2},failEffect:{flag:'archive_failed'},note:'Inès a préparé une copie de secours contenant des références même si l’archive ne s’ouvre pas.'}),
A('Vérifier la provenance de la copie',`Le bordereau local indique sa création lundi à 18 h 26. Votre dernier message d’Inès est plus ancien. Vous ne savez pas où elle se trouvait, mais vous pouvez cesser d’imaginer que tout s’est arrêté au moment où elle a cessé de vous répondre.

Vous copiez la date avec le fuseau affiché pour éviter une fausse contradiction plus tard.`,{effect:{flag:'copy_time',skill:{technique:1},rel:{ines:1}},note:'La copie a été créée lundi à 18 h 26, après le dernier message direct d’Inès.'}),
A('Préparer une sauvegarde séparée',`Vous dupliquez les fichiers sans les modifier et notez leur provenance. Le disque reste hors ligne. Vous ne transférez pas les noms des habitants dans un espace dont vous ne connaissez pas les accès.

Ce n’est pas très spectaculaire. C’est la première fois depuis votre arrivée que vous avez le sentiment de ne pas pouvoir perdre une information par un geste trop rapide.`,{effect:{flag:'local_backup',proof:1,skill:{technique:1}},note:'Une copie de travail séparée a été créée sans modifier les fichiers d’Inès.'})]),
L('Les affaires de votre père','Une autre forme d’héritage',`Le bureau a été rangé par Inès après sa mort. Vous connaissez les tiroirs et presque aucun de leurs papiers. Une enveloppe ouverte porte son prénom.`,[
A('Lire la lettre jamais envoyée',`Votre père explique qu’il a laissé une demande technique en attente, puis a cessé de relancer quand il a compris que plusieurs responsables préféraient cette attente. Il parle de peur et de fatigue, pas d’un ordre secret.

La lettre ne résout pas l’affaire. Elle vous retire seulement la possibilité confortable de tenir votre famille entièrement en dehors.`,{item:'letter',effect:{flag:'letter_read',skill:{calm:1}},note:'Votre père a reconnu dans une lettre son renoncement à relancer un signalement.'}),
A('Chercher le double du signalement',`Sous une pile de factures, vous trouvez une copie de sa demande. Le numéro d’intervention correspond au relevé de Malik. Votre père avait reçu une réponse automatique, puis aucune confirmation d’essai.

Le papier vous touche ; sa valeur ne vient pourtant pas du fait qu’il appartenait à votre famille. Elle vient de sa date et de sa référence.`,{test:['observation',3],success:'Vous retrouvez aussi l’accusé de réception qui relie les deux services.',fail:'La copie est incomplète. Vous conservez la référence sans prétendre avoir retrouvé toute la chaîne.',successEffect:{flag:'father_receipt',proof:2},effect:{proof:1},note:'Le signalement de votre père correspond au relevé de Malik par son numéro d’intervention.'}),
A('Ranger seulement ce qui vous appartient',`Vous refermez l’enveloppe adressée à Inès sans chercher à lire davantage ses affaires personnelles. Dans un autre tiroir, vous retrouvez une photo de vous deux où votre père a mal cadré le ciel.

Vous lui envoyez la photo. Aucune demande, aucun code. Juste une image qui lui laisse la possibilité d’être votre sœur avant d’être votre source.`,{effect:{flag:'family_photo',rel:{ines:2}},note:'Vous avez envoyé à Inès une photo familiale sans lui demander de réponse immédiate.'})]),
L('La soirée','Les gens derrière vos messages',`Votre téléphone a de la batterie. Les messages peuvent partir maintenant ou attendre ; personne ne vous impose une conversation supplémentaire. Vous pouvez aussi vous imposer un peu de repos.`,[
A('Faire le point avec Nora',`Vous séparez ensemble les pièces, les récits et vos intuitions. Nora barre une formulation trop large dans son propre brouillon. Vous corrigez une date dans le vôtre.

Vous n’êtes pas d’accord sur la vitesse à laquelle il faut approcher Aster. Pour la première fois, le désaccord ne vous semble pas une menace pour l’enquête.`,{effect:{rel:{nora:1},flag:'shared_timeline',proof:1},note:'Une chronologie commune a été établie avec Nora, en séparant faits et hypothèses.'}),
A('Écrire un message personnel à Inès',`Vous ouvrez un brouillon. Vous avez assez répété des références et des heures. Cette fois, vous choisissez vos propres mots, sans être obligé de lui pardonner ou de lui reprocher quoi que ce soit.`,{input:{prompt:'Écrivez quelques mots à votre sœur. Ils pourront être relus plus tard.',store:'message'},customNote:'Votre message à Inès : ',effect:{flag:'personal_message',rel:{ines:1}}}),
A('Manger et vous reposer un moment',`Vous réchauffez une soupe et mangez assis. Le réfrigérateur fait un bruit de moteur trop vieux. Vous laissez le téléphone sur une chaise, à portée mais pas dans la main.

Les documents ne changent pas pendant que vous les quittez des yeux. Vous revenez au bureau avec moins d’idées urgentes et davantage de place pour les vérifier.`,{effect:{skill:{calm:1},flag:'rested'},note:'Vous avez pris un moment de repos avant de poursuivre.'})])],
D('À qui confier une copie ?',`Il existe maintenant assez de pièces pour que leur perte compte. Vous ne pouvez pas faire de tout le monde un dépositaire sans décider aussi de ce qu’il aura le droit de lire.`,[
C('Partager les pièces vérifiées avec Nora',`Vous préparez un dossier sans les coordonnées privées. Nora accuse réception document par document. Le travail peut continuer si votre ordinateur tombe en panne, sans que toute la vie des habitants change de mains.`,{flag:'nora_copy',proof:1,rel:{nora:1}}),
C('Préparer une copie pour un avocat',`Vous faites une liste des pièces et de leurs conditions d’utilisation. Le rendez-vous n’est pas encore fixé, mais vous avez préparé un objet transmissible plutôt qu’un amas de fichiers.`,{flag:'legal_copy',proof:1}),
C('Tout conserver localement pour l’instant',`Vous éteignez le disque et le rangez à part de l’ordinateur. Vous gardez le contrôle de la copie, avec la responsabilité de ne pas devenir son unique point de fragilité.`,{flag:'private_copy',skill:{calm:1}}),
C('Envoyer une copie intégrale à plusieurs contacts',`Les fichiers seront plus difficiles à perdre. Ils seront aussi plus difficiles à reprendre. Vous venez de confier à d’autres personnes des détails que certains habitants ne vous avaient pas autorisé à diffuser.`,{flag:'wide_copy',exposure:3,proof:1,rel:{nora:-1}})]));

B('L’autre entrée.','Le centre Belrive','Mercredi',480,95,
`Le centre porte deux noms sur deux plaques : clinique privée à gauche, hébergement temporaire à droite. Le même parking dessert les deux. Vous comprenez comment un trajet peut devenir « médical » dans un dossier sans que tous ses passagers aient été malades.

Une femme à l’accueil vous demande si vous êtes de la famille d’une personne hébergée. Vous répondez que vous cherchez votre sœur. Quand vous prononcez Inès, elle consulte une feuille posée sous son clavier, puis relève les yeux. Quelqu’un l’a prévenue de votre visite, sans lui dire exactement ce qu’elle devait vous répondre.`,
'Identifier le passage d’Inès et les admissions après l’incendie.',[
L('L’accueil de droite','Un nom sur une feuille',`La réceptionniste, Ana, ne vous laissera pas consulter les dossiers des résidents. Elle peut toutefois vérifier un passage dans le registre des visiteurs.`,[
A('Demander le passage d’Inès',`Ana retrouve une entrée à quatorze heures douze, lundi. La sortie est cochée sans heure. Inès était accompagnée d’une ancienne agente, puis a demandé à voir le responsable des archives. Ana vous décrit sa veste avec suffisamment de précision pour écarter une homonymie.

« Elle est partie par la cour avec une dame âgée. Pas avec nos agents. »`,{effect:{flag:'ines_left',rel:{ines:1}},note:'Inès a quitté Belrive lundi par la cour, avec une dame âgée. La sortie n’a pas d’heure.'}),
A('Expliquer les deux bâtiments',`Ana sort un dépliant. L’accueil d’urgence utilisait des chambres de la clinique pendant les travaux d’une aile. Les admissions administratives et les actes médicaux étaient saisis dans des applications séparées.

Un nom absent du registre médical peut donc être présent dans le registre d’hébergement. Vous barrez une hypothèse que vous aviez commencé à aimer.`,{effect:{flag:'two_registers',proof:1},note:'Belrive tenait deux registres distincts : soins et hébergement.'}),
A('Demander qui attendait ma visite',`Ana hésite. Vous lui dites qu’elle peut garder un nom pour elle si elle vous confirme seulement l’heure de l’appel. Elle accepte : hier, dix-neuf heures.

La personne demandait de ne pas vous transmettre de coordonnées privées. Ce n’était pas forcément une manœuvre contre vous. Cela pourrait même correspondre à ce qu’Inès aurait demandé.`,{test:['empathy',4],success:'Ana ajoute que l’appel venait d’une femme qui vous appelait « {alias} ».',fail:'Elle refuse d’ajouter un détail. Vous obtenez l’heure, sans nom.',successEffect:{flag:'ines_called_desk'},note:'Une femme a appelé l’accueil mardi à 19 h pour anticiper votre visite.'})]),
L('La cour ouverte','Une sortie discrète',`La cour est accessible aux visiteurs. Une navette part vers le centre-ville et un jardinier ramasse les feuilles près d’un banc. Vous pouvez questionner sans entrer dans les chambres.`,[
A('Parler au conducteur de la navette',`Il reconnaît Inès sur votre photo. Elle a accompagné une dame jusqu’à l’arrêt des cars, sans monter elle-même. La dame portait un sac rouge dont la poignée avait été réparée au ruban adhésif.

Il se souvient du sac parce qu’il l’a aidée à le porter. Il ignore où Inès est allée après.`,{note:'Inès a aidé une femme au sac rouge à rejoindre l’arrêt des cars.',effect:{flag:'red_bag'}}),
A('Chercher la personne au sac rouge',`Une bénévole connaît la description : Jeanne Morel, ancienne habitante des Ormes. Elle est repartie chez sa cousine à Saint-Aulne. La bénévole refuse de vous donner l’adresse sans l’appeler.

Vous attendez la réponse. Jeanne accepte une visite cet après-midi et demande que vous achetiez des piles pour sa radio.`,{cost:20,effect:{flag:'jeanne_visit'},note:'Jeanne Morel accepte une visite à Saint-Aulne. Elle a demandé des piles pour sa radio.'}),
A('Examiner les horaires affichés',`La dernière navette de lundi partait avant l’heure d’impression de votre ticket de consigne. Vous ne pouvez pas faire tenir tous les déplacements dans l’ordre que vous aviez imaginé.

Cela confirme surtout que plusieurs personnes se sont relayées. Inès n’a pas tout transporté elle-même. Vous dessinez des flèches plutôt que d’inventer un trajet impossible.`,{effect:{skill:{observation:1},flag:'relay_timeline'},note:'Plusieurs personnes se sont relayées : Inès ne pouvait pas effectuer seule tous les déplacements.'})]),
L('Le bureau des admissions','Des copies autorisées',`Le responsable accepte de vous montrer des informations anonymisées sur le fonctionnement de l’accueil d’urgence. Les dossiers nominatifs nécessiteraient l’accord des personnes concernées.`,[
A('Demander une copie du registre anonymisé',`Les sept arrivées apparaissent sur deux pages. Les heures ont été corrigées, mais les ratures sont restées visibles dans cette version papier. Vous recevez une copie expurgée, datée et signée.

La colonne des accords est plus vide que celle des chambres. C’est la première irrégularité que le responsable accepte de reconnaître lui-même.`,{item:'ledger',effect:{proof:1},note:'Le responsable de Belrive fournit une copie anonymisée du registre d’hébergement.'}),
A('Demander qui pouvait corriger une heure',`La procédure permettait au service d’accueil de saisir une correction demandée par un cadre. Le nom visible n’est pas toujours celui de l’auteur de la demande.

Un historique des modifications a été conservé chez le prestataire. Le responsable vous donne la référence du marché, sans promettre que le prestataire vous transmettra les fichiers.`,{effect:{flag:'provider_log'},note:'Un historique des corrections pourrait exister chez le prestataire informatique.'}),
A('Le confronter avec les signatures manquantes',`Vous posez votre question sans adoucir le mot « accord ». Le responsable invoque l’urgence, puis vous demande de comprendre le nombre de personnes arrivées cette nuit-là.

Vous pouvez comprendre la fatigue sans effacer la question. Vous la répétez. Il consent à noter votre demande de justification dans un courrier daté.`,{test:['calm',4],success:'Il reconnaît que cinq accords n’étaient pas complétés lors de l’admission.',fail:'L’entretien s’arrête avant sa réponse. Votre demande écrite reste enregistrée.',successEffect:{proof:2,flag:'five_missing'},effect:{skill:{calm:1}},note:'Une demande écrite porte sur les accords incomplets à Belrive.'})])],
D('Une personne avant une piste.',`Jeanne vous attend cet après-midi. Nora voudrait que vous restiez à Belrive pour obtenir un second entretien. Vous devez organiser votre temps et dire ce que vous considérez comme prioritaire.`,[
C('Aller voir Jeanne comme convenu',`Vous confirmez votre visite et achetez les piles. Nora se chargera de demander le second entretien. Vous n’obtiendrez pas tout vous-même, et ce n’est pas nécessaire.`,{flag:'jeanne_priority',rel:{nora:1}}),
C('Demander à Nora de rencontrer Jeanne',`Jeanne refuse de parler à une journaliste qu’elle ne connaît pas encore. Vous la rappelez pour déplacer votre visite. Elle accepte, mais vous rappelle que son après-midi n’était pas vide avant vous.`,{flag:'jeanne_delayed',rel:{nora:-1}}),
C('Envoyer une demande écrite puis partir',`Vous laissez une liste précise de questions. Le responsable doit désormais répondre à des phrases dont la formulation ne changera plus. Jeanne vous attendra un peu, sans que vous lui promettiez une heure impossible.`,{flag:'belrive_written',proof:1}),
C('Relever les contacts et garder toutes les options',`Vous repartez avec davantage de numéros que de décisions. Cette souplesse peut vous aider ; elle peut aussi devenir une manière polie de laisser attendre les autres.`,{flag:'belrive_open',skill:{observation:1}})]));

B('Le sac rouge.','Saint-Aulne','Mercredi',600,100,
`Jeanne vous ouvre avant que vous ayez fini de sonner. La maison appartient à sa cousine, qui travaille à l’hôpital et dort entre deux services. Il faudra parler doucement.

Un sac rouge est posé contre la porte. Vous le reconnaissez avant de regarder Jeanne. Elle suit votre regard : « Je le garde prêt. C’est devenu une habitude. » Votre sœur est venue ici lundi soir. Elle a réparé une prise, mangé une tartine, puis laissé un message pour vous.

Jeanne ne commence pas par le message. Elle vous demande si vous avez les piles. Pour une fois, l’ordre des urgences appartient à quelqu’un d’autre.`,
'Écouter Jeanne et retrouver le dernier geste d’Inès.',[
L('La table de la cuisine','Un récit qui prend son temps',`Jeanne pose trois tasses malgré la présence de deux personnes. Elle range ensuite la troisième, presque fâchée contre elle-même.`,[
A('Demander ce qui s’est passé à Belrive',`On lui avait promis quelques nuits, puis une solution près de ses voisins. Après son transfert, les appels arrivaient sur un téléphone qu’elle n’avait plus. Un courrier déclarait qu’elle avait quitté volontairement les Ormes.

« Je suis sortie parce que ça brûlait. Je ne vois pas ce que cela dit de ma volonté d’habiter ailleurs. »`,{effect:{flag:'jeanne_story',proof:1},note:'Jeanne conteste la présentation de son départ comme un choix volontaire.'}),
A('Laisser Jeanne parler d’autre chose',`Elle vous raconte la fenêtre de sa cuisine, le bruit des enfants sur le palier et le boulanger qui mettait les pains invendus de côté. Elle ne vous demande pas de lui restituer une époque idéale. Elle sait très bien quels murs étaient humides.

Elle veut seulement que l’état du bâtiment ne serve pas à déclarer sa vie entière indigne d’être regrettée.`,{effect:{skill:{empathy:1},rel:{sam:1}},note:'Jeanne distingue les défauts réels du logement et les liens qu’elle y avait construits.'}),
A('Demander son autorisation pour utiliser son récit',`Jeanne accepte que son prénom et ses paroles soient cités. Pas son adresse actuelle, pas le nom de sa cousine, pas le détail de son traitement.

Vous relisez à voix haute les phrases retenues. Elle en corrige une : elle n’avait pas « peur des agents », elle avait peur de ne plus retrouver ses affaires. Ce n’est pas le même souvenir.`,{effect:{flag:'jeanne_consent',proof:1},note:'Jeanne autorise la citation de son prénom et de son récit, sans adresse ni renseignements médicaux.'})]),
L('Le sac près de la porte','Les objets d’un déplacement',`Jeanne vous autorise à l’aider à trier les papiers du sac. Elle reste à côté de vous et reprend parfois une enveloppe avant que vous ne l’ouvriez.`,[
A('Comparer les courriers de relogement',`Trois lettres parlent de trois situations différentes : hébergement provisoire, départ volontaire, dossier définitivement clos. Elles reposent pourtant sur la même signature.

Jeanne avait signé une feuille qui attestait la remise d’un repas. Elle en a conservé le double parce qu’elle gardait tout ce qui pouvait justifier une dépense. Cette habitude devient aujourd’hui une protection.`,{effect:{flag:'meal_copy',proof:2},note:'Jeanne conserve le double d’un reçu de repas portant la signature réutilisée dans son dossier.'}),
A('Identifier la liste dans la poche intérieure',`Jeanne reconnaît plusieurs prénoms. Elle vous indique ceux des personnes avec qui elle reste en contact, puis refuse de deviner pour les autres.

La liste transmise par Inès n’est pas une liste de morts. C’est une liste de situations qu’il fallait reprendre une par une. La différence change la forme de toute l’enquête.`,{item:'list',effect:{flag:'list_context'},note:'La liste d’Inès suit des situations à vérifier ; elle ne recense pas des décès.'}),
A('Réparer la poignée du sac',`Vous remplacez le ruban qui se décolle par une sangle plus solide. Jeanne surveille votre travail avec un sérieux qui vous oblige à le prendre au sérieux aussi.

Elle aurait pu demander un sac neuf. Celui-ci a voyagé avec elle. Il n’est pas seulement le signe de ce qu’elle a perdu. Elle vous laisse enfin lire le message d’Inès.`,{effect:{skill:{technique:1},flag:'jeanne_bag_fixed'},note:'Vous avez réparé le sac de Jeanne.'})]),
L('Le message laissé','La voix d’Inès sans son téléphone',`Jeanne a noté les mots d’Inès au dos d’une facture. Elle vous prévient qu’elle n’a pas conservé chaque virgule.`,[
A('Lire le message entier',`« {alias}, je vais bien. Je n’ai pas voulu te faire peur. Je vois à quel point cette phrase est ratée. J’ai besoin de deux jours pour laisser quelqu’un décider de parler sans l’encercler de nos attentes. Ne viens pas me chercher partout. Commence par comprendre ce que nous avons fait aux autres. {phrase}. »

Votre colère ne disparaît pas. Elle trouve enfin quelqu’un à qui s’adresser.`,{effect:{flag:'ines_message',rel:{ines:1}},note:'Inès a laissé chez Jeanne un message disant qu’elle allait bien et accompagnait une personne hésitant à témoigner.'}),
A('Demander comment Jeanne sait qu’il vient d’elle',`Jeanne vous décrit la petite cicatrice sur le pouce d’Inès et la façon dont elle pousse une chaise du pied quand elle a les mains prises. Ce sont des détails faciles à reconnaître et difficiles à transformer en preuve absolue.

Elle vous propose surtout une chose concrète : Inès rappellera jeudi matin. Jeanne lui demandera de vous parler directement.`,{effect:{flag:'thursday_call'},note:'Jeanne attend un appel d’Inès jeudi matin et lui demandera de vous parler.'}),
A('Laisser mes propres mots à Inès',`Vous prenez la facture, puis choisissez une feuille propre. Vous ne voulez pas écrire votre réponse dans les marges de la sienne.

Vous pouvez demander une explication, dire votre colère ou lui laisser une porte ouverte. Jeanne transmettra vos mots sans ajouter ce qu’elle aurait voulu entendre à votre place.`,{input:{prompt:'Écrivez le message que Jeanne transmettra à Inès.',store:'message'},customNote:'Votre réponse laissée chez Jeanne : ',effect:{flag:'reply_jeanne',rel:{ines:1}}})])],
D('Une inquiétude qui change.',`Vous avez désormais de bonnes raisons de croire qu’Inès a choisi de couper son téléphone. Elle vous a tout de même laissé dans la peur. Votre réponse pèsera quand vous vous retrouverez.`,[
C('Lui laisser le temps qu’elle demande',`Vous écrivez une heure à laquelle vous serez joignable. Vous lui demandez seulement de confirmer elle-même qu’elle est en sécurité. Ce n’est pas renoncer à votre colère, c’est lui réserver une vraie conversation.`,{flag:'ines_space',rel:{ines:2}}),
C('Exiger un appel dès que possible',`Jeanne transmettra votre demande sans la rendre plus douce. Vous êtes venu parce qu’Inès vous a appelé. Vous estimez avoir droit à une réponse directe, même si l’enquête ne vous appartient pas.`,{flag:'ines_call_demand',rel:{ines:-1},skill:{calm:1}}),
C('Prévenir Nora sans diffuser le message',`Vous dites à Nora qu’Inès est vraisemblablement en sécurité. Vous gardez les mots personnels pour votre sœur. Nora peut ajuster ses démarches sans entrer dans votre conversation familiale.`,{flag:'nora_reassured',rel:{nora:1,ines:1}}),
C('Maintenir ma déclaration officielle',`Vous complétez votre déclaration avec les nouvelles informations. Vous ne la présentez plus comme une disparition inexpliquée. Il reste légitime de souhaiter entendre la personne elle-même.`,{flag:'official_updated',proof:1})]));

B('Le choix des noms.','Le garage des Peupliers','Mercredi',720,90,
`Le garage est presque vide à l’heure du déjeuner. Sam vous attend près d’une voiture qui n’a plus ses roues. La sœur de Malik trie des reçus sur le comptoir. La vie de ces personnes continue pendant que vous essayez d’en faire une chronologie.

Un message circule déjà dans le quartier : « Ils ont retrouvé les disparus des Ormes. » Vous ignorez qui l’a écrit. La phrase ressemble assez à ce que vous cherchez pour être crédible, et assez peu pour faire des dégâts.

Sam vous montre l’écran. « C’est vous ? » Il ne vous accuse pas encore. Il vous laisse une chance de répondre.`,
'Revenir vers les personnes à qui vous avez demandé de l’aide.',[
L('Sam','Ce qu’il a réellement dit',`Il a imprimé une capture du message. Il voudrait corriger tout le monde à la fois, puis disparaître de la conversation. Vous reconnaissez la fatigue.`,[
A('Faire relire son témoignage',`Vous lui présentez les notes où il apparaît. Sam corrige un lieu et supprime une formule qu’il avait employée sous le coup de la colère. Il ne retire pas le fond de ce qu’il a raconté.

Vous ajoutez la date de la relecture. La conversation cesse de tourner autour de sa peur d’être déformé. Il peut recommencer à parler de la suite.`,{effect:{fulfill:'samreview',flag:'sam_reviewed',proof:1,rel:{sam:1}},note:'Sam a relu et corrigé son témoignage.'}),
A('L’aider pour son dossier de logement',`Sam a reçu une offre qui l’éloignerait de son emploi et de son frère. Vous l’aidez à écrire pourquoi cette solution ne correspond pas à sa situation, sans lui dicter une décision.

La bénévole de permanence accepte de porter le recours et demande les pièces manquantes. Vous avez créé un début de solution, pas une garantie.`,{cost:20,effect:{flag:'sam_home',rel:{sam:2}},note:'Le recours de Sam contre une proposition de relogement inadaptée a été préparé.'}),
A('Lui demander d’affronter publiquement la rumeur',`Vous suggérez qu’un message de sa part pourrait clarifier les choses. Il vous demande pourquoi ce serait encore à lui de faire ce travail.

Si vous prenez le temps d’entendre la question, vous pouvez proposer une correction en votre propre nom. Si vous insistez, il refuse et s’éloigne.`,{test:['empathy',4],success:'Vous rédigez la correction avec lui, en prenant la responsabilité de sa diffusion.',fail:'Sam refuse de devenir le porte-parole automatique de tous les habitants.',successEffect:{flag:'rumor_corrected',rel:{sam:1}},failEffect:{rel:{sam:-1}},note:'La rumeur « disparus retrouvés » ne décrit pas correctement les situations suivies.'})]),
L('La sœur de Malik','Un objet à rendre',`Elle s’appelle Salomé. Elle vous reconnaît parce que Malik lui a décrit une personne qui prend beaucoup de notes et oublie parfois de boire.`,[
A('Rendre le badge à Salomé',`Vous remettez le badge si vous l’avez emporté. Salomé le range dans une boîte avec une médaille du travail. Il appartenait au père de Malik avant d’être réattribué ; la photo avait été changée, pas le support.

Elle vous remercie d’avoir rapporté un objet qui ne servait plus. Malik reçoit son message pendant que vous êtes encore là.`,{effect:{fulfill:'badge',remove:'badge',flag:'badge_returned',rel:{malik:1}},note:'Salomé a reçu le badge désactivé de Malik ou confirmé qu’il était déjà en sécurité.'}),
A('Parler des conséquences pour Malik',`Depuis les demandes de documents, ses horaires ont changé. Cela peut être une coïncidence ; Salomé vous demande simplement de ne pas oublier que les gens retournent travailler après vous avoir aidé.

Vous lui proposez un moyen de signaler les changements sans devoir les qualifier immédiatement comme des représailles. Elle accepte le contact de Nora.`,{effect:{flag:'malik_followup',rel:{malik:1,nora:1}},note:'Un contact de suivi est mis en place pour les changements de situation de Malik.'}),
A('L’aider à retrouver une facture',`Salomé recherche une facture de location d’un minibus, remisé ici après la nuit de l’incendie. Le numéro de véhicule correspond au manifeste de transport.

Le garage l’avait réparé pour un défaut de chauffage. Ce détail explique les couvertures décrites par plusieurs témoins, sans nécessiter l’hypothèse d’un transport de patients.`,{effect:{flag:'bus_invoice',proof:1,skill:{technique:1}},note:'Le minibus était au garage pour un défaut de chauffage, compatible avec les couvertures décrites.'})]),
L('La pause de midi','Une rumeur et ses chemins',`Nora vous rejoint avec un sandwich pour vous. Elle peut remonter les versions publiques d’un message, pas lire les conversations privées de toute la ville.`,[
A('Retracer ce qui a été publié',`Le premier message public reprend une question, puis la transforme en affirmation. Une personne l’a illustré avec une ancienne photo des Ormes. À chaque partage, une réserve disparaît.

Vous n’avez pas trouvé un chef d’orchestre. Vous avez trouvé une phrase que beaucoup de gens avaient une raison différente de vouloir croire.`,{effect:{flag:'rumor_chain',skill:{observation:1}},note:'La rumeur provient d’une question transformée progressivement en affirmation.'}),
A('Publier une correction limitée',`Vous indiquez que l’enquête concerne des parcours de relogement, pas une liste de personnes déclarées mortes. Vous ne donnez aucun nom pour prouver que vous avez raison.

La correction circule moins vite que la rumeur. Elle reste pourtant disponible pour ceux qui veulent vérifier plutôt que partager. Nora la reprend.`,{effect:{flag:'rumor_corrected',rel:{sam:1,nora:1}},note:'Une correction publique distingue les parcours de relogement des supposées disparitions.'}),
A('Ignorer les messages et protéger le dossier',`Vous décidez que répondre à tout vous ferait perdre la journée. Nora vous aide à organiser les pièces, mais vous avertit que d’autres continueront à remplir le silence.

Vous acceptez cette conséquence. Sam, lui, ne peut pas ignorer aussi facilement les messages que reçoivent ses proches. Il faudra lui reparler.`,{effect:{flag:'rumor_ignored',proof:1,rel:{sam:-1}},note:'Vous avez privilégié le travail documentaire plutôt que la réponse publique à la rumeur.'})])],
D('Parler en son nom.',`Le quartier demande une explication. Sam ne veut pas être utilisé comme l’emblème d’une histoire qu’il n’a pas choisie. Vous avez encore le choix de la personne qui prendra la parole.`,[
C('Prendre la responsabilité de mes démarches',`Vous signez une explication courte en votre nom. Vous dites ce que vous cherchez et ce que vous ignorez. Les questions arrivent vers vous plutôt que vers Sam.`,{flag:'owned_inquiry',exposure:1,rel:{sam:2}}),
C('Laisser Nora porter l’explication',`Nora publie une note méthodologique sans noms privés. Elle devient plus visible dans l’affaire. Vous lui demandez comment vous pourrez l’aider si la pression augmente.`,{flag:'nora_front',rel:{nora:1}}),
C('Préparer une parole collective consentie',`Vous convenez d’une réunion courte avec les personnes qui le souhaitent. Personne n’est ajouté à une liste de soutiens parce qu’il a simplement répondu à une question.`,{flag:'collective_voice',rel:{sam:1,malik:1},proof:1}),
C('Garder le silence jusqu’à la vérification finale',`Vous expliquez ce silence aux personnes directement concernées. Certaines comprennent, d’autres vous reprochent de leur laisser gérer les rumeurs. Le dossier avance tout de même.`,{flag:'public_silence',rel:{sam:-1},skill:{calm:1}})]));

B('Le bureau vitré.','Le siège d’Aster','Mercredi',840,100,
`Aster occupe deux étages d’un immeuble sans signe particulier. Des plantes identiques bordent la réception. Le directeur des opérations, Marc Veyre, accepte de vous recevoir après avoir pris connaissance des questions de Nora.

Il ne ressemble pas à l’homme en veste claire de la gare. Cette petite déception vous apprend quelque chose sur les images que vous aviez déjà assemblées. Veyre vous propose un café, puis prononce le prénom d’Inès avant que vous ne le fassiez.

« Votre sœur a travaillé chez nous comme prestataire ponctuelle. Elle ne vous l’a pas dit ? »`,
'Entendre la version d’Aster et confronter les pièces disponibles.',[
L('Marc Veyre','Une version bien préparée',`Veyre ne refuse pas vos questions. Il les reformule jusqu’à leur donner une forme plus confortable. Vous pouvez encore les lui rendre.`,[
A('Inès a-t-elle réellement travaillé pour vous ?',`Oui, quelques journées pour aider à reconstituer des dossiers incomplets. Veyre vous montre une lettre de mission. Elle n’a pas donné à Inès le pouvoir de décider du sort des habitants.

Vous comprenez pourquoi elle connaissait l’intérieur du dispositif. Vous comprenez aussi qu’elle vous a laissé imaginer une distance plus grande entre elle et ce qu’elle cherchait à révéler.`,{effect:{flag:'ines_contract'},note:'Inès a effectué une mission de reconstitution de dossiers pour Aster.'}),
A('Pourquoi les signatures changent-elles de fonction ?',`Veyre parle de reprise de données et d’erreurs possibles entre versions. Vous lui montrez les deux usages d’une même signature, si vous disposez de cette comparaison.

Il cesse de parler de votre compréhension et promet une réponse sur ces deux pièces. C’est un déplacement minuscule : le sujet redevient le document plutôt que la personne qui le questionne.`,{need:'meal_copy',success:'La comparaison concrète l’oblige à demander un contrôle interne écrit.',fail:'Sans les deux versions sous les yeux, il vous demande leurs références et évite la contradiction précise.',successEffect:{flag:'aster_audit',proof:2},note:'Aster a été interrogé sur les usages distincts d’une même signature.'}),
A('Qui a clôturé les signalements techniques ?',`Il affirme que les décisions techniques appartenaient au bailleur. Le contrat indique pourtant qu’Aster gérait l’interface entre les services.

Vous revenez à cette interface : qui recevait une alerte, qui la transmettait, qui confirmait la réparation ? Veyre demande que la question soit adressée par écrit à son service juridique. Vous la notez devant lui.`,{effect:{flag:'aster_interface',proof:1},note:'Aster renvoie les responsabilités techniques au bailleur, tout en gérant l’interface entre les services.'})]),
L('Le dossier remis','Des réponses sélectionnées',`Une assistante dépose un dossier de communication. Certaines pages peuvent être utiles précisément parce qu’Aster a choisi de les inclure.`,[
A('Lire le contrat de prestation',`Le contrat rémunère les dossiers clos. Il mentionne la qualité de l’accompagnement dans son préambule, mais la facture dépend d’un nombre administratif.

Vous demandez si un dossier rouvert réduisait la rémunération. L’assistante ignore la réponse. Elle accepte de transmettre la question sans la résumer en une plainte générale.`,{item:'contract',effect:{proof:1},note:'Le contrat d’Aster rémunère le nombre de dossiers clos.'}),
A('Comparer le dossier avec les archives',`La version remise par Aster comporte la page absente du dossier municipal. Le problème n’est donc pas une destruction générale de l’annexe.

Vous indiquez seulement que deux versions ont circulé. Attribuer le retrait à Aster dès maintenant vous ferait manquer ceux qui ont reçu, modifié ou utilisé ses documents.`,{need:'missing_page',success:'Vous pouvez nommer les deux versions et demander leur circuit de diffusion exact.',fail:'Vous relevez la pagination pour la comparer ensuite ; il vous manque encore la copie opposable.',successEffect:{flag:'two_copies',proof:2},note:'Le dossier d’Aster contient une annexe absente d’une version municipale.'}),
A('Regarder les chiffres de réussite',`Le tableau annonce 96 % de situations résolues. En petit, la définition inclut les personnes sans réponse après deux relances. Vous demandez où ces relances ont été envoyées.

L’assistante vous apporte la définition imprimée. Vous n’avez pas découvert un faux chiffre ; vous avez découvert ce qu’on lui faisait compter.`,{effect:{flag:'success_metric',proof:2,skill:{observation:1}},note:'Le taux de réussite inclut les personnes sans réponse aux relances.'})]),
L('La sortie de l’entretien','Ce que Veyre propose',`Veyre vous accompagne jusqu’à l’ascenseur. Sa voix devient moins officielle quand les portes du bureau sont derrière vous.`,[
A('Écouter sa proposition',`Il propose de financer une réouverture rapide de certains dossiers si le débat ne se transforme pas immédiatement en affaire publique. Des gens pourraient obtenir une aide plus tôt.

Il ne vous demande pas encore de signer. Il veut savoir si vous considérez une solution imparfaite comme une trahison ou comme un résultat. La question mérite une réponse moins automatique que vous ne le voudriez.`,{effect:{flag:'aster_offer'},note:'Veyre propose une réouverture ciblée des dossiers en échange d’un traitement discret.'}),
A('L’interroger sur l’homme de la gare',`Il affirme ne pas avoir envoyé quelqu’un récupérer le sac. Il ne vous demande pas comment vous connaissez cette tentative, ce qui vous frappe sans constituer une preuve.

Il admet que l’un de ses cadres voulait récupérer des copies internes confiées à Inès. L’identité et les moyens employés restent à établir.`,{effect:{flag:'recovery_attempt'},note:'Un cadre d’Aster voulait récupérer des copies internes auprès d’Inès ; Veyre nie avoir ordonné la tentative à la gare.'}),
A('Refuser la conversation informelle',`Vous lui demandez d’envoyer toute proposition par écrit. Veyre sourit, puis dit que cela prendra du temps. Vous répondez que les personnes concernées pourront au moins lire les conditions.

L’ascenseur arrive. Vous avez renoncé à quelques confidences possibles pour éviter qu’une promesse prononcée dans un couloir devienne votre unique levier.`,{effect:{flag:'offer_written',skill:{calm:1},proof:1},note:'Vous avez demandé une proposition écrite d’Aster.'})])],
D('Une offre qui coûte.',`Vous savez maintenant qu’une solution partielle pourrait être négociée. Elle aiderait des personnes. Elle pourrait aussi laisser intact le dispositif qui les a mises dans cette situation.`,[
C('Demander des conditions écrites sans m’engager',`Veyre accepte de produire un projet. Vous le transmettrez aux personnes concernées avant de donner une réponse. La négociation commence, sans devenir encore votre décision.`,{flag:'negotiation_open',proof:1}),
C('Refuser toute contrepartie de silence',`Vous dites que la réparation des dossiers ne doit pas dépendre d’un silence sur les faits. Veyre vous répond que vous risquez de retarder des aides concrètes. Vous savez qu’il pourrait avoir raison sur ce coût, sans avoir raison sur la condition.`,{flag:'no_silence',rel:{nora:1,sam:1}}),
C('Explorer une réparation discrète',`Vous acceptez de voir ce qui peut être obtenu rapidement. Vous devrez expliquer ce choix aux habitants sans leur faire croire que l’accord efface le passé. Nora veut connaître toutes les conditions.`,{flag:'deal_route',rel:{nora:-1},proof:1}),
C('Transmettre l’offre à un avocat',`Vous décidez de ne pas porter seul une négociation qui engage d’autres vies. L’avocat pourra examiner ce qui est promis, ce qui manque et ce qui serait abandonné en échange.`,{flag:'legal_route',proof:1,skill:{calm:1}})]));

B('La place laissée vide.','La permanence de quartier','Mercredi',960,90,
`Farida a trouvé une salle prêtée pour la soirée. Des habitants viennent avec des enveloppes, des captures d’écran et des questions qui n’attendront pas la fin de votre enquête. Une chaise est restée vide pour Inès.

Vous avez appris qu’elle avait travaillé pour Aster. Vous pourriez garder ce fait pour vous jusqu’à lui avoir parlé. Vous pourriez aussi le laisser tomber sur la table comme une accusation. Entre les deux, il existe une façon plus difficile de reconnaître ce que vous savez sans prétendre savoir le reste.

Nora arrive en dernier. Elle a déjà entendu parler de la lettre de mission. Elle vous laisse choisir vos premiers mots.`,
'Mettre les informations en commun et tenir les engagements pris.',[
L('La table de travail','Les gens et leurs dossiers',`Les dossiers n’ont pas tous le même problème. Un couple attend une indemnité, une autre personne veut seulement que son courrier arrive au bon endroit.`,[
A('Séparer les demandes au lieu de les regrouper',`Vous créez trois piles avec l’accord des personnes : logement, aides, rectification des documents. La séparation paraît modeste, mais elle évite qu’une réponse sur le logement soit présentée comme la résolution de tout.

Farida propose un contact pour chaque pile. Les habitants n’auront plus à raconter toute leur histoire au premier guichet venu.`,{effect:{flag:'cases_sorted',proof:1,rel:{sam:1}},note:'Les demandes ont été séparées en logement, aides et rectification des documents.'}),
A('Organiser le dernier retrait du local',`Vous appelez le conducteur de la camionnette, vérifiez les cartons restants et trouvez un lieu de stockage provisoire. Le dernier retrait ne tient pas dans un grand geste : il tient dans quatre appels auxquels quelqu’un répond.

Farida reçoit les photos du local vide. Elle peut enfin rendre les clés sans choisir quelles affaires abandonner.`,{cost:20,effect:{fulfill:'localpickup',flag:'local_saved',rel:{sam:1}},note:'Le dernier retrait des affaires du local associatif a été organisé.'}),
A('Parler de l’offre d’Aster',`Vous exposez l’offre sans promettre son résultat. Certains habitants veulent une solution rapide ; d’autres refusent que l’argent mette fin aux questions. Les mêmes personnes peuvent souhaiter les deux.

La réunion ne produit pas une opinion unique. Elle produit une liste de conditions que personne ne vous avait autorisé à inventer seul.`,{effect:{flag:'offer_discussed',rel:{sam:1},proof:1},note:'Les habitants ont formulé leurs conditions : aides concrètes, absence de renonciation générale, suivi indépendant.'})]),
L('Lucie près de la fenêtre','Un témoignage à reprendre',`Lucie a apporté trois pages et un vieux formulaire. Elle veut les lire avec vous avant que la fatigue ne l’empêche de distinguer ce qu’elle accepte de ce qu’elle subit.`,[
A('Relire et signer les faits',`Vous remplacez deux « nous » trop vagues par les fonctions exactes des personnes présentes. Lucie retire une phrase qu’elle tenait d’une collègue et ajoute qu’elle n’en a pas été témoin.

Elle signe ensuite, sans cérémonie. La précision a rendu le texte moins spectaculaire et plus difficile à écarter. Vous lui laissez une copie identique à la vôtre.`,{item:'statement',effect:{fulfill:'lucieread',flag:'statement_signed',proof:2},note:'Lucie a relu et signé un témoignage limité à ses observations directes.'}),
A('Examiner le formulaire qu’elle a signé',`Le formulaire certifiait que les personnes avaient reçu une explication. Lucie reconnaît avoir signé pour tout un groupe alors qu’elle n’avait parlé qu’à deux personnes. Un supérieur lui avait assuré que les autres avaient été informées par une autre équipe.

Elle aurait dû vérifier. Elle ne l’a pas fait. Cela ne rend pas les autres signatures vraies ; cela la place aussi parmi les personnes qui devront répondre.`,{effect:{flag:'lucie_fault',proof:2},note:'Lucie a attesté une information collective qu’elle n’avait vérifiée que pour deux personnes.'}),
A('Préparer la copie sans coordonnées privées',`Vous produisez une version où son adresse et celle de sa fille sont retirées. Lucie vérifie que les dates, les fonctions et les faits restent présents.

Elle pose les deux versions côte à côte. « C’est donc possible de me protéger sans me faire disparaître du texte. » Vous notez à qui chaque version pourra être transmise.`,{effect:{fulfill:'lucieprivacy',flag:'protected_lucie',rel:{elise:1}},note:'Une version du témoignage protège les coordonnées de Lucie et de sa famille.'})]),
L('Nora à la porte','Une information sur Inès',`Nora n’a pas encore écrit que votre sœur avait travaillé pour Aster. Elle vous demande si vous comptez traiter ce fait différemment parce qu’il concerne votre famille.`,[
A('Reconnaître ce que je viens d’apprendre',`Vous lui dites que vous êtes blessé, et que cette blessure peut vous faire sous-estimer ou surestimer ce qu’Inès a fait. Nora vous propose de faire vérifier les documents de votre sœur par quelqu’un d’autre.

Accepter une limite de votre regard vous paraît d’abord humiliant. Puis vous sentez la possibilité de ne plus devoir être votre propre juge.`,{effect:{flag:'family_review',rel:{nora:2},proof:1},note:'Une personne extérieure vérifiera les documents impliquant Inès.'}),
A('Défendre Inès avant d’avoir son explication',`Vous rappelez ce qu’elle a fait pour les habitants. Nora ne le conteste pas. Elle vous demande simplement si cela répond à la lettre de mission.

Vous répétez votre argument avant d’entendre qu’il n’en est pas un. La conversation s’arrête sans rupture, mais vous devrez revenir sur ce moment.`,{effect:{flag:'defended_ines',rel:{nora:-1,ines:1}},note:'Vous avez défendu Inès avant de connaître l’ensemble de sa mission.'}),
A('Demander à entendre Inès avant publication',`Nora accepte de lui donner un délai de réponse, comme aux autres personnes citées. Vous ne lui demandez pas une immunité familiale.

Vous convenez d’une heure jeudi. Après, le fait de ne pas répondre pourra être indiqué, mais il ne sera pas interprété comme un aveu. Cette règle vous convient moins quand elle devient concrète.`,{effect:{flag:'ines_reply_window',rel:{nora:1}},note:'Inès disposera d’un délai de réponse avant toute publication sur sa mission.'})])],
D('Qui décide pour qui ?',`La réunion se termine sans vote unique. Une personne veut accepter l’offre. Une autre veut agir en justice. Une troisième ne veut plus entendre parler de son dossier ce soir.`,[
C('Respecter les choix individuels',`Vous notez les décisions séparément et refusez de présenter le groupe comme unanimement favorable à votre préférence. La suite sera plus compliquée, mais elle appartiendra davantage à ceux qui la vivent.`,{flag:'individual_choices',rel:{sam:2},proof:1}),
C('Proposer un minimum commun',`Vous obtenez un accord limité : aucun dossier ne doit être clos sans explication et sans possibilité de recours. Le reste pourra suivre des voies différentes. Ce petit socle tient mieux qu’un accord total inventé.`,{flag:'common_ground',rel:{sam:1,nora:1}}),
C('Pousser à une action collective publique',`Quelques personnes vous suivent, d’autres quittent la salle. Vous avez créé une force visible, mais vous devrez éviter de parler comme si les absents vous avaient mandaté.`,{flag:'public_group',exposure:1,rel:{sam:-1,nora:1}}),
C('Laisser Farida coordonner la suite',`Vous remettez vos notes avec les accords de transmission. Farida connaît mieux les besoins immédiats. Vous gardez votre place dans l’enquête, sans vous installer au centre de toutes les décisions.`,{flag:'farida_coordination',rel:{sam:1},skill:{calm:1}})]));

B('Onze minutes.','L’atelier informatique','Mercredi',1080,100,
`Le prestataire qui hébergeait les formulaires s’appelle Ligne Claire. Son atelier se trouve au-dessus d’un magasin de réparation de téléphones. Rien dans le lieu ne correspond à l’image d’un centre de contrôle.

La responsable, Adèle, a accepté une rencontre après la demande écrite de conservation. Elle ne vous donnera pas accès à ses systèmes. Elle peut expliquer les journaux et produire un export des versions autorisées par son client.

Deux consignes de consentement ont été modifiées à onze minutes d’intervalle. Vous avez enfin une différence assez petite pour être examinée, assez grande pour avoir changé la vie de plusieurs personnes.`,
'Vérifier le mécanisme des modifications et conserver une copie utilisable.',[
L('Adèle','La personne qui garde les versions',`Elle commence par vous montrer une page vide. « Un journal d’activité raconte ce qu’un logiciel a enregistré. Pas tout ce qui s’est passé autour. »`,[
A('Demander ce que prouve une empreinte de fichier',`Une empreinte permet de reconnaître un fichier identique à une copie de référence. Elle ne donne ni vérité morale ni garantie sur la sincérité de son auteur.

Vous posez la question deux fois, sous deux formes, pour être certain de pouvoir l’expliquer à quelqu’un d’autre. Adèle apprécie davantage cette prudence que les mots techniques que vous auriez pu employer.`,{effect:{skill:{technique:1},flag:'hash_understood'},note:'Les empreintes vérifient l’intégrité d’une copie depuis son export, pas la vérité de son contenu.'}),
A('Obtenir l’export des versions communicables',`Adèle prépare les deux versions, leurs dates et un bordereau de transmission. Les champs privés sont exclus. Vous vérifiez le nombre de fichiers avant d’accepter la copie.

La consigne a changé : l’accord explicite est devenu une information réputée donnée. Onze minutes séparent les versions. Les signatures des habitants, elles, ont été reprises sans nouvelle demande.`,{item:'backup',effect:{flag:'export_obtained',proof:2},note:'Un export conserve le changement de la règle de consentement entre deux versions.'}),
A('Identifier qui a demandé la modification',`La demande venait d’une adresse fonctionnelle de la cellule municipale. La validation utilisait un compte de responsable d’Aster. Adèle refuse de transformer les noms des comptes en identité certaine des personnes devant les écrans.

Elle conserve toutefois le ticket de demande. Ce ticket peut être confronté à des témoignages, à des horaires et à des documents signés.`,{effect:{flag:'change_chain',proof:2},note:'Le changement a été demandé par une adresse de la cellule municipale et validé par un compte Aster.'})]),
L('Les deux versions','Une différence à interpréter',`Le texte apparaît côte à côte. Il suffit de lire quelques lignes ; il est beaucoup plus difficile de comprendre leur effet dans le reste du système.`,[
A('Suivre ce qui arrive à une signature',`Adèle utilise un dossier fictif pour vous montrer le fonctionnement. Une signature collectée pour une remise d’aide est copiée dans un champ générique. La version suivante affiche ce champ sous un autre intitulé.

Personne n’a besoin de redessiner la signature. Le changement de sens est produit par le formulaire. Vous comprenez pourquoi les personnes reconnaissaient leur écriture sans reconnaître ce qu’on lui faisait dire.`,{test:['technique',4],success:'Vous reconstituez la chaîne complète et pouvez nommer les champs concernés.',fail:'Vous comprenez le principe, mais avez besoin du schéma d’Adèle pour éviter de confondre les étapes.',successEffect:{flag:'signature_chain',proof:2},effect:{skill:{technique:1}},note:'Une signature a été réutilisée dans un champ générique dont l’intitulé a changé.'}),
A('Chercher une explication innocente',`Une migration mal préparée peut produire une partie des erreurs. Elle n’explique pas, à elle seule, les consignes écrites demandant de clore rapidement les dossiers.

Vous conservez les deux éléments sans forcer leur fusion. Le mécanisme technique peut avoir commencé comme une facilité puis être devenu une opportunité. Il faudra encore établir qui savait quoi et quand.`,{effect:{flag:'alternative_checked',proof:1,skill:{observation:1}},note:'Une erreur de migration reste possible, mais n’explique pas les consignes de clôture à elle seule.'}),
A('Vérifier les dates de correction',`Certaines corrections ont précédé les premières plaintes ; d’autres les ont suivies. Une correction tardive ne prouve pas automatiquement une dissimulation : elle peut aussi répondre à un signalement.

Vous cherchez donc les pièces qui accompagnaient chaque changement. Adèle vous remet les références des tickets, pas les conversations privées des agents.`,{effect:{flag:'correction_tickets',proof:1},note:'Les corrections doivent être rapprochées des demandes qui les ont déclenchées.'})]),
L('La sauvegarde sortante','Préparer une preuve qui voyage',`Le dossier peut sortir de l’atelier. Il doit conserver son origine et ses limites quand vous le montrerez à quelqu’un qui n’a pas assisté à la démonstration.`,[
A('Faire un inventaire contradictoire',`Vous lisez chaque nom de fichier pendant qu’Adèle coche sa liste. Vous notez les pièces absentes et la raison de leur absence. Vous signez seulement la réception, pas une déclaration selon laquelle vous auriez tout compris.

La formalité vous paraît longue jusqu’au moment où vous imaginez devoir expliquer cette copie dans six mois.`,{effect:{flag:'chain_custody',proof:2},note:'Un inventaire de réception décrit les fichiers et les exclusions de l’export.'}),
A('Demander un schéma accessible aux habitants',`Adèle dessine quatre cases : signature, champ, nouvel intitulé, dossier clos. Vous lui demandez une version sans noms de produits ni détails de logiciel inutiles.

Le schéma permettra de discuter ce qui a été fait sans obliger les personnes concernées à devenir informaticiennes pour comprendre leur propre dossier.`,{effect:{flag:'simple_diagram',rel:{sam:1},proof:1},note:'Un schéma simple explique le changement de sens des signatures.'}),
A('Préparer une demande de conservation plus large',`Vous ne demandez pas une copie de tout. Vous listez les périodes, les catégories de tickets et les versions qui devraient rester disponibles pour une vérification indépendante.

Adèle transmettra la demande à son responsable. Elle vous prévient que certaines données avaient déjà été supprimées selon les règles ordinaires. Vous ajoutez ce manque au dossier.`,{effect:{flag:'logs_preserved',proof:1},note:'Une demande de conservation ciblée a été déposée ; certaines anciennes données ne sont plus disponibles.'})])],
D('Une explication qui tient.',`Nora veut résumer le mécanisme en une phrase. Une phrase trop simple pourrait se retourner contre tout le travail. Une explication trop technique pourrait ne toucher personne.`,[
C('Décrire le mécanisme et ses limites',`Vous écrivez que des signatures ont changé d’usage à travers des versions de formulaires, et que les responsabilités exactes restent à établir. Nora garde cette phrase, même si elle est moins tranchante qu’un titre.`,{flag:'careful_explanation',proof:2}),
C('Montrer les deux versions côte à côte',`Vous laissez le lecteur voir le changement, avec une légende précise. Les pièces ne parlent jamais tout à fait seules, mais elles empêchent votre résumé de devenir leur unique interprétation.`,{flag:'show_versions',proof:1,rel:{nora:1}}),
C('Accuser immédiatement une falsification organisée',`L’accusation rend la situation visible. Elle dépasse aussi ce que les pièces établissent sur l’intention de chaque intervenant. Vous devrez soutenir une formulation plus large que votre démonstration.`,{flag:'strong_accusation',exposure:2,rel:{nora:-1}}),
C('Réserver l’explication à une expertise',`Vous demandez un examen indépendant avant de rendre le mécanisme public. Cette patience donne du temps aux autres versions de l’histoire pour circuler. Elle peut aussi consolider ce qui suivra.`,{flag:'expert_route',proof:1,skill:{calm:1}})]));

B('Le message de jeudi.','La passerelle du canal','Jeudi',480,90,
`Votre téléphone sonne alors que vous êtes déjà dehors. Jeanne ne dit qu’une phrase : « Elle arrive à la passerelle dans vingt minutes. » Vous lui demandez si elle a l’air d’aller bien. Jeanne répond que vous pourrez lui demander vous-même.

Inès est adossée au garde-corps, avec un manteau que vous ne connaissez pas. Elle paraît plus petite sans l’urgence que vous aviez mise autour d’elle. Vous avez préparé des dizaines de premières phrases. Aucune ne vous vient.

Elle dit votre surnom, « {alias} », et attend. Pour une fois, c’est elle qui n’a pas de document à poser entre vous.`,
'Retrouver Inès et décider comment entendre ce qu’elle a à dire.',[
L('Inès','Enfin une réponse directe',`Elle vous confirme qu’elle est en sécurité. Elle a accompagné une personne qui craignait de revenir sur son témoignage. Elle ne commence pas par vous demander de comprendre.`,[
A('Lui dire ce que son silence m’a fait',`Vous lui racontez la gare, l’enveloppe, votre réflexe d’appeler votre père. Inès ferme les yeux au milieu de cette dernière phrase.

« Je pensais te laisser assez de signes. Je t’ai laissé du travail à la place d’une réponse. » Elle ne transforme pas ses raisons en excuse complète. Votre colère peut rester dans la conversation sans la rendre impossible.`,{effect:{flag:'ines_confronted',rel:{ines:1},skill:{calm:1}},note:'Inès reconnaît que ses indices n’ont pas remplacé une réponse directe.'}),
A('Demander pourquoi elle travaillait pour Aster',`Elle voulait aider à débloquer des dossiers. Elle a accepté une mission courte, puis a découvert que les corrections qu’on lui demandait facilitaient aussi leur clôture.

Elle a modifié plusieurs fiches avant de comprendre l’effet d’ensemble. Depuis, elle cherche à reconstituer ses gestes. Ce n’est pas seulement une enquête sur d’autres personnes : c’est aussi la sienne.`,{effect:{flag:'ines_fault',proof:1},note:'Inès a modifié des fiches pendant sa mission avant d’en comprendre l’usage global.'}),
A('Lui montrer mon message personnel',`Elle lit lentement les mots que vous avez laissés : « {message} ». Si vous n’avez rien écrit, le silence prend toute la place, et vous lui dites simplement que vous êtes venu.

Elle ne répond pas par une formule brillante. Elle vous demande si elle peut rester à côté de vous pendant que vous décidez quoi lui dire ensuite.`,{effect:{flag:'sibling_talk',rel:{ines:2}},note:'Vous avez pris un moment pour parler à Inès comme à votre sœur.'})]),
L('Le banc sous les arbres','La personne qu’elle accompagnait',`Inès vous parle de Thomas Ravel, ancien coordinateur municipal. Il souhaite expliquer la chaîne de décisions, mais refuse que sa famille soit prise au milieu.`,[
A('Pourquoi ne venait-il pas seul ?',`Thomas a quitté son poste après un arrêt de travail. Il craint qu’on interprète tout ce qu’il dit à travers cet épisode plutôt qu’à travers les pièces. Inès l’a aidé à organiser ses documents et à trouver un lieu de rendez-vous.

Elle n’a pas séquestré une source pour la convaincre. Il a demandé un délai, et elle a accepté de l’accompagner.`,{effect:{flag:'thomas_context'},note:'Thomas Ravel, ancien coordinateur, prépare un témoignage avec des documents.'}),
A('Demander une rencontre sans condition préalable',`Inès refuse de promettre la parole d’un autre. Elle peut lui transmettre votre demande. Vous insistez sur le besoin de comprendre les responsabilités, puis vous arrêtez avant de transformer ce besoin en droit sur une personne.

Elle vous donne l’heure et le lieu de la rencontre déjà prévue, sous réserve de son accord.`,{effect:{flag:'thomas_meeting',rel:{ines:1}},note:'Une rencontre avec Thomas est prévue, sous réserve de son accord.'}),
A('Demander ce qu’Inès lui a promis',`Elle lui a promis de ne pas diffuser l’adresse où il dormait et de lui laisser relire les passages qui lui seraient attribués. Elle ne lui a pas promis d’effacer sa responsabilité.

Vous notez la différence. Inès vous dit qu’elle avait peur que vous trouviez cela trop lent. Vous lui demandez depuis quand elle choisit vos réponses à votre place.`,{effect:{flag:'thomas_terms',skill:{empathy:1}},note:'Thomas a obtenu la protection de son adresse et la relecture de ses propres propos, pas une immunité.'})]),
L('La marche au bord de l’eau','Votre famille dans l’affaire',`Vous marchez sans regarder vos écrans. Inès sait que vous avez pu retrouver les papiers de votre père. Elle attend de voir si vous en parlerez.`,[
A('Parler de sa lettre',`Inès l’a lue avant vous. Elle avait espéré trouver une explication nette, puis s’était sentie injuste de la demander à un mort. Votre père avait aidé des gens et laissé des choses se perdre.

Vous convenez de ne pas utiliser ses bonnes actions pour effacer son silence, ni son silence pour faire disparaître tout le reste. Cela ne résout pas le chagrin.`,{effect:{flag:'father_shared',rel:{ines:1}},note:'Vous et Inès avez parlé des responsabilités et des limites de votre père.'}),
A('Lui demander de corriger elle-même ses fiches',`Inès accepte de décrire exactement ce qu’elle a modifié et sur quelle instruction. Elle ne peut pas annuler seule les effets, mais elle peut arrêter d’être seulement la personne qui révèle les erreurs des autres.

Vous lui proposez de rester pendant qu’elle rédige. Cette fois, votre présence n’a pas été obtenue par une énigme.`,{effect:{flag:'ines_accountability',proof:2,rel:{ines:1}},note:'Inès accepte de documenter ses propres modifications de dossiers.'}),
A('Dire que j’ai besoin d’un peu de distance',`Vous avez retrouvé votre sœur, mais la confiance ne revient pas à l’heure du rendez-vous. Vous lui demandez de ne plus organiser vos déplacements sans vous expliquer pourquoi.

Elle accepte. Vous fixez un prochain appel simple, sans intermédiaire et sans code. La distance peut aussi devenir une manière de maintenir un lien qui ne tient plus tout seul.`,{effect:{flag:'sibling_boundary',skill:{calm:1}},note:'Vous avez fixé avec Inès une limite claire et un prochain appel direct.'})])],
D('Continuer ensemble ?',`Inès vous demande si vous souhaitez qu’elle vous accompagne à la rencontre de Thomas. Elle ne peut pas choisir pour vous cette fois.`,[
C('Continuer avec elle, en partageant tout',`Vous convenez de ne plus vous laisser seulement des morceaux utiles. Les mauvaises nouvelles et les hésitations feront aussi partie du partage. Inès vous demande de lui rappeler cet accord si elle recommence à décider seule.`,{flag:'sibling_team',rel:{ines:2}}),
C('Lui demander de prendre du recul',`Elle vous remet les références qu’elle n’a pas encore partagées. Vous ne l’écartez pas de sa propre responsabilité ; vous lui demandez de laisser d’autres regards travailler. Elle accepte avec difficulté.`,{flag:'ines_back',proof:1,rel:{ines:-1}}),
C('Faire vérifier son récit par Nora',`Inès accepte d’être interrogée comme les autres. Vous ne participerez pas à toute la conversation. Ce choix protège autant le dossier que la possibilité de rester sa famille.`,{flag:'ines_independent',proof:2,rel:{nora:1}}),
C('Garder notre relation hors du travail',`Vous fixez un dîner après la fin de cette séquence. En attendant, les échanges porteront sur les faits et les décisions. Vous ne savez pas encore si cette séparation est durable, mais elle vous donne de l’air.`,{flag:'sibling_separate',skill:{calm:1}})]));

B('Celui qui validait.','La maison des associations','Jeudi',600,105,
`Thomas a choisi une salle prêtée plutôt qu’un lieu caché. Il a posé un classeur sur la table et demandé à une avocate d’être présente. Elle s’appelle Maître Legrand. Elle précisera qui elle représente avant de répondre à la moindre question.

Thomas a l’air d’un homme qui a répété son récit assez longtemps pour ne plus savoir où il commence. Vous pouvez lui demander ce qu’il a vu, ce qu’il a signé, ce qu’il a supposé. Les trois catégories ne contiendront pas les mêmes phrases.

« Je ne suis pas venu parce que je n’ai rien fait », dit-il. « Je suis venu parce que j’ai fait des choses. »`,
'Reconstituer la chaîne des décisions sans donner une immunité à une source.',[
L('Thomas','Des signatures qu’il reconnaît',`L’avocate vous rappelle que Thomas choisit de parler et peut s’arrêter. Elle n’intervient pas pour répondre à sa place.`,[
A('Que saviez-vous au moment des validations ?',`Il savait que des dossiers étaient incomplets. Il croyait que la clôture permettrait de débloquer des financements, puis que les situations seraient corrigées ensuite. Il reconnaît n’avoir demandé aucun mécanisme concret pour cette correction.

Quand les premières plaintes sont arrivées, il a compris que le provisoire était devenu la version officielle. Il a continué à signer pendant trois semaines.`,{effect:{flag:'thomas_admission',proof:2},note:'Thomas reconnaît avoir continué des validations après l’arrivée des premières plaintes.'}),
A('Qui lui donnait les instructions ?',`Les objectifs venaient du cabinet de l’adjoint au logement, les tableaux d’Aster, les validations passaient par son service. Il ne décrit pas une réunion où quelqu’un aurait annoncé un plan complet.

Il décrit des demandes compatibles entre elles : libérer un site, atteindre un indicateur, éviter les retards. Personne n’avait besoin de prononcer la conséquence entière pour la produire.`,{effect:{flag:'decision_chain',proof:2},note:'Les objectifs municipaux, les tableaux d’Aster et les validations du service de Thomas formaient une chaîne.'}),
A('Pourquoi parler maintenant ?',`Une habitante lui a envoyé la copie d’un formulaire au nom de son mari décédé avant l’incendie. L’erreur était assez grossière pour devenir impossible à ranger avec les autres.

Ce n’était pas la plus grave conséquence, dit-il. C’était celle qui avait enfin traversé sa capacité à se raconter qu’un service corrigerait tout plus tard.`,{effect:{flag:'thomas_trigger',skill:{empathy:1}},note:'Un formulaire attribué à une personne décédée a déclenché la décision de Thomas de reprendre les pièces.'})]),
L('Le classeur','Les instructions conservées',`Thomas a conservé des copies de documents auxquels il avait accès dans ses fonctions. L’avocate vérifiera les conditions de leur transmission ; vous pouvez examiner les pièces sélectionnées pour cette rencontre.`,[
A('Comparer les objectifs et les courriers',`Un tableau demande la clôture de quatre-vingt-dix dossiers avant le vote d’une tranche de financement. Un message précise que les contestations tardives seront traitées « dans un second temps ».

Ce second temps n’a ni responsable nommé ni budget. Vous posez les documents côte à côte. Thomas les avait toujours lus séparément.`,{effect:{flag:'closure_target',proof:2},note:'L’objectif de clôture précédait un vote de financement ; le traitement ultérieur des contestations n’avait ni responsable ni budget.'}),
A('Chercher le rôle exact de Veyre',`Veyre demandait des chiffres favorables et suivait les dossiers clos. Une note de réunion montre qu’on l’a averti des signatures contestées. Il a répondu qu’il fallait distinguer les erreurs isolées des défauts du dispositif.

Cela ne démontre pas qu’il a conçu chaque modification. Cela établit qu’il ne pouvait plus dire ignorer l’existence du problème à partir de cette date.`,{effect:{flag:'veyre_warned',proof:2},note:'Une note de réunion établit que Veyre avait été informé des signatures contestées.'}),
A('Vérifier les pièces qui contredisent Thomas',`Un courriel montre qu’il avait reçu une alerte plus tôt que dans son récit. Vous le lui présentez sans l’accuser d’avoir tout inventé. Il relit, puis corrige la chronologie.

Il pourrait avoir oublié ; il pourrait aussi avoir choisi un point de départ plus supportable. Vous conservez la contradiction et sa correction. Les pièces ne deviennent pas inutiles parce que leur source est imparfaite.`,{test:['calm',4],success:'Thomas accepte que la contradiction figure dans sa déclaration jointe.',fail:'Il se ferme et demande une pause. L’avocate vous autorise à garder la référence de la contradiction.',successEffect:{flag:'thomas_corrected',proof:2},effect:{skill:{calm:1}},note:'Une alerte reçue par Thomas est antérieure à celle qu’il citait initialement.'})]),
L('L’avocate','Ce qui peut être transmis',`Maître Legrand représente Thomas pour cette rencontre. Elle peut expliquer des voies de transmission, mais elle n’est pas automatiquement l’avocate de toutes les personnes présentes.`,[
A('Préparer une transmission indépendante',`Elle propose que les pièces soient inventoriées par un autre conseil chargé des habitants. Thomas conserve son assistance ; les habitants auront la leur.

La séparation évite de faire dépendre leur dossier de la stratégie d’une personne qui pourrait elle-même être mise en cause. Thomas accepte le principe, puis demande un délai pour relire l’inventaire.`,{effect:{flag:'independent_counsel',proof:1},note:'Un conseil distinct doit recevoir les pièces pour les habitants.'}),
A('Demander si la publication est indispensable',`Elle ne vous donne pas une réponse universelle. Une publication peut empêcher l’oubli et compliquer certaines vérifications. Une procédure peut établir des responsabilités et laisser les gens attendre longtemps.

Vous comprenez que choisir une voie ne supprime pas ses coûts. L’avocate vous recommande surtout de ne pas promettre aux habitants une vitesse que personne ne contrôle.`,{effect:{flag:'routes_understood',skill:{calm:1}},note:'Les voies publique, administrative et judiciaire ont des effets et des délais différents.'}),
A('Fixer les limites d’une citation de Thomas',`Il accepte que son nom soit cité avec les faits qu’il reconnaît. Il ne souhaite pas que son adresse actuelle ou les détails de son arrêt de travail figurent dans l’article.

L’avocate note l’accord. Vous refusez une phrase qui présenterait sa venue comme la preuve qu’il n’a plus rien à se reprocher. Thomas la retire lui-même.`,{effect:{flag:'thomas_consent',proof:1},note:'Thomas autorise sa citation sans données privées ; son témoignage ne vaut pas exonération.'})])],
D('Le statut d’une source.',`Thomas vous demande si le fait d’avoir parlé comptera pour vous. Vous pouvez reconnaître ce geste sans décider à l’avance de ses conséquences.`,[
C('Reconnaître son aide sans effacer ses actes',`Vous lui dites que les deux figureront dans votre compréhension : ce qu’il a fait et ce qu’il accepte maintenant d’expliquer. Il semble déçu de ne pas recevoir une absolution, puis soulagé de ne pas devoir la défendre.`,{flag:'thomas_balanced',proof:2}),
C('Privilégier les pièces et limiter son portrait',`Vous utiliserez les documents et les faits vérifiables. Thomas ne deviendra pas le héros de la réparation d’un système auquel il a participé. Il conserve le droit d’être entendu précisément.`,{flag:'documents_first',proof:1,rel:{nora:1}}),
C('Le présenter comme un témoin courageux',`Son choix de parler est réel. Votre cadrage risque pourtant de rendre ses erreurs secondaires avant qu’elles soient examinées. Nora vous demande de maintenir les contradictions dans le dossier.`,{flag:'thomas_hero',rel:{nora:-1}}),
C('Refuser de travailler directement avec lui',`Les pièces passeront par les conseils. Vous ne voulez pas d’une relation personnelle qui pourrait rendre certaines questions plus difficiles à poser. Vous acceptez le délai supplémentaire.`,{flag:'thomas_distance',proof:1,skill:{calm:1}})]));

B('Une version officielle.','L’hôtel de ville','Jeudi',720,95,
`La cellule municipale vous reçoit dans une salle où les fenêtres ne s’ouvrent pas. L’adjointe au logement, Claire Sorel, a lu les questions de Nora. Elle commence par rappeler le nombre de familles prises en charge cette nuit-là.

Vous n’avez aucune raison d’effacer ce travail. Vous n’avez pas non plus besoin de l’effacer pour poser les questions qui restent. Sorel regarde les pièces que vous avez apportées, puis vous. Elle n’est pas certaine de savoir si vous voulez une réponse, une confrontation ou une scène à raconter.

Vous pouvez encore lui montrer ce que vous cherchez.`,
'Confronter la réponse municipale aux versions conservées.',[
L('Claire Sorel','Les mots d’une responsabilité',`Sorel a dirigé la cellule d’urgence. Elle affirme ne pas avoir conçu les formulaires. Cela ne dit pas encore comment elle a contrôlé leur utilisation.`,[
A('Qui vérifiait les situations déclarées résolues ?',`Un tableau remontait chaque semaine. Sorel reconnaît qu’il comptait surtout les clôtures et les dépenses, pas le maintien des liens familiaux ni la réception du courrier. Elle pensait que les services de terrain vérifiaient ces aspects.

Vous lui demandez où cette tâche était attribuée par écrit. Elle ne trouve pas immédiatement de réponse.`,{effect:{flag:'no_owner',proof:2},note:'Aucun responsable écrit du contrôle réel des relogements n’est identifié par Sorel pendant l’entretien.'}),
A('Pourquoi la page de réserve a-t-elle disparu ?',`Sorel parle d’un dossier abrégé destiné au vote. Vous lui demandez si la page retirée pouvait changer la compréhension des élus. Elle reconnaît que la réserve aurait dû être mentionnée dans la synthèse.

Cette reconnaissance ne vous dit pas qui a choisi l’abrégé. Elle rend toutefois plus difficile la défense selon laquelle la page ne changeait rien.`,{need:'missing_page',success:'Vos références permettent d’obtenir une réponse écrite sur les deux versions.',fail:'Sans les deux cotes, elle promet une vérification sans commenter un document précis.',successEffect:{flag:'sorel_page',proof:2},note:'Sorel affirme que la réserve d’information aurait dû figurer dans la synthèse.'}),
A('Lui demander si elle savait pour les plaintes',`Elle avait reçu des signalements présentés comme des cas isolés. Vous posez devant elle la chronologie de leur accumulation. Le mot « isolé » devient moins facile à prononcer.

Elle reconnaît la date d’une réunion où Veyre était présent. Vous notez l’accord sur la date avant de discuter son interprétation.`,{effect:{flag:'sorel_alerted',proof:1},note:'Sorel reconnaît une réunion consacrée aux contestations avec Veyre présent.'})]),
L('Les documents du conseil','Ce qui a été voté',`Le secrétariat met les procès-verbaux communicables à votre disposition. Les débats ne contiennent pas tout ce que vous espériez, mais ils enregistrent des questions oubliées.`,[
A('Lire les réserves d’un élu minoritaire',`Une élue demandait où iraient les habitants du bâtiment B. La réponse parlait de l’urgence concernant le bâtiment incendié. La séance avait ensuite continué sur le coût des travaux.

La question n’avait pas été interdite. Elle avait été déplacée jusqu’à ne plus recevoir de réponse. Vous relevez la page et le nom de la séance.`,{effect:{flag:'council_question',proof:1},note:'Une question sur le bâtiment B a reçu une réponse portant sur le bâtiment incendié.'}),
A('Comparer le calendrier financier',`La tranche de financement exigeait la libération de la parcelle avant la fin du trimestre. Le tableau des dossiers clos a commencé à s’améliorer juste avant cette échéance.

La coïncidence ne démontre pas chaque instruction. Mise à côté des messages de Thomas, elle donne cependant un contexte matériel à l’urgence administrative.`,{need:'closure_target',success:'Le calendrier et l’instruction se corroborent sur les mêmes dates.',fail:'Vous gardez la corrélation en attente d’une instruction qui l’explique.',successEffect:{flag:'finance_link',proof:2},note:'L’échéance financière coïncide avec l’accélération des clôtures.'}),
A('Demander les corrections prévues',`Le secrétariat prépare une commission de réexamen. Sa première version n’inclut aucun représentant des habitants. Vous le signalez, et l’agente ajoute votre remarque au dossier.

Elle ne vous promet pas que la composition changera. Vous avez toutefois rendu visible une absence qui aurait pu passer pour un simple détail d’organisation.`,{effect:{flag:'commission_request',rel:{sam:1}},note:'La présence des habitants dans une commission de réexamen a été demandée.'})]),
L('Le couloir','Ce qu’on ne met pas en séance',`Une collaboratrice vous rejoint avant la sortie. Elle ne souhaite pas être citée, mais veut vous indiquer un document public que vous n’avez pas demandé.`,[
A('Écouter son indication',`Le rapport de sécurité de l’incendie distingue le départ de feu, l’évacuation et le relogement. Mélanger ces sujets a permis aux intervenants de répondre sur celui qui les exposait le moins.

Elle vous donne la référence de la partie communicable. Vous ne lui demandez pas son opinion sur les personnes : vous avez une nouvelle pièce à vérifier.`,{effect:{flag:'fire_report'},note:'Le rapport distingue les causes du feu, les conditions d’évacuation et les décisions ultérieures de relogement.'}),
A('Lui demander une réponse officielle',`Elle accepte de faire ajouter la référence au courrier du service. Vous renoncez à la sensation d’avoir reçu un secret et gagnez une origine que vous pourrez expliquer.

La collaboratrice vous dit que ce choix lui facilite la vie. Elle n’aura pas à nier une conversation dont l’essentiel n’était pas confidentiel.`,{effect:{flag:'official_reference',proof:1},note:'La référence du rapport sera ajoutée à la réponse écrite municipale.'}),
A('Ne pas ajouter une nouvelle piste',`Vous avez assez de questions pour oublier de vérifier les premières. Vous notez la référence sans demander la pièce aujourd’hui.

Le dossier restera incomplet sur l’incendie lui-même. Vous pourrez le dire clairement plutôt que de laisser le lecteur croire que vous avez résolu toutes les questions parce que certaines se touchent.`,{effect:{flag:'scope_limited',skill:{calm:1}},note:'Vous limitez votre enquête aux décisions de relogement et à leurs traces documentaires.'})])],
D('Le cadre du récit.',`La ville souhaite que l’affaire soit présentée comme une erreur de traitement en cours de correction. Vous devez choisir comment répondre à cette qualification.`,[
C('Demander un examen indépendant du mécanisme',`Vous acceptez que des erreurs existent, mais demandez que leur répétition et les alertes reçues soient examinées. La correction ne remplace pas l’explication.`,{flag:'independent_review',proof:1}),
C('Insister sur les décisions prises après les alertes',`Vous centrez vos questions sur ce que les responsables savaient lorsqu’ils ont continué. Ce cadre réduit la place des suppositions et augmente celle des dates.`,{flag:'knowledge_focus',proof:2}),
C('Employer le mot scandale publiquement',`Le mot attire l’attention. Il peut rendre les responsables moins disponibles et les habitants plus visibles. Vous devrez donner autant de place aux pièces qu’à la force du terme.`,{flag:'scandal',exposure:2}),
C('Négocier d’abord la réouverture des dossiers',`Vous demandez un calendrier concret et un suivi. Les habitants pourraient obtenir une réponse plus vite. La recherche des responsabilités devra trouver une autre voie en parallèle.`,{flag:'reopening_first',rel:{sam:1}})]));

B('La pièce qui manque.','Le dossier technique','Jeudi',840,95,
`Nora a obtenu la partie communicable du rapport sur l’incendie. Vous vous retrouvez dans une petite salle de lecture avec Malik et une ingénieure indépendante, Daria. Elle a accepté de vous aider à comprendre les termes, sans refaire une expertise complète en une heure.

Le départ de feu est accidentel selon le rapport disponible. L’état de certains équipements a compliqué l’évacuation. Le relogement appartient à une autre chronologie. Cette séparation retire à l’histoire son explication la plus simple : quelqu’un n’a pas nécessairement provoqué le feu pour profiter de ce qui l’a suivi.

La vérité demande parfois de renoncer à la scène que vous aviez commencé à imaginer.`,
'Vérifier ce que les pièces permettent réellement d’affirmer.',[
L('Daria','Comprendre sans surinterpréter',`L’ingénieure dispose du rapport, pas de tous les prélèvements. Elle vous dit dès le début ce qu’elle ne pourra pas conclure.`,[
A('Distinguer cause et aggravation',`Un appareil électrique a provoqué le départ de feu selon l’expertise. La propagation des fumées dépend aussi du bâtiment et de ses équipements. Une faute d’entretien éventuelle n’est pas identique à un incendie volontaire.

Vous reformulez. Daria corrige un mot. Ce mot aurait suffi à accuser quelqu’un d’un acte différent de celui que les pièces décrivent.`,{effect:{flag:'cause_distinction',proof:2},note:'Le rapport disponible décrit un départ de feu accidentel ; les défauts d’entretien et le relogement sont des questions distinctes.'}),
A('Comparer l’extraction et le relevé de Malik',`Le relevé correspond à un équipement mentionné dans le rapport. Il établit qu’un défaut avait été signalé. Il ne permet pas à lui seul de quantifier ce qui se serait passé avec un équipement réparé.

Daria recommande une expertise contradictoire si les habitants veulent poursuivre cette question. Vous ajoutez sa limite à la référence du document.`,{effect:{flag:'maintenance_corroborated',proof:1},note:'Le défaut signalé par Malik correspond à un équipement du rapport ; son effet exact nécessite une expertise.'}),
A('Demander ce qui manque encore',`Des essais, des plans de modification, des données sur les ouvertures de portes. Daria énumère les pièces absentes sans que cela ressemble à une raison d’abandonner.

Vous comprenez qu’un dossier peut être assez solide pour poser une question et encore trop incomplet pour y répondre. Cette étape intermédiaire n’est pas un échec.`,{effect:{flag:'expert_limits',skill:{observation:1}},note:'L’expertise complète nécessiterait des essais et des données supplémentaires.'})]),
L('Malik','Une mise au point personnelle',`Malik a lu le résumé d’un message qui le présentait comme « celui qui savait ». Il ne nie pas son alerte. Il conteste ce que les autres ont ajouté autour.`,[
A('Corriger ce que j’ai laissé entendre',`Vous reprenez avec lui les mots employés. Il savait qu’un essai était nécessaire, pas qu’un incendie allait survenir. Vous corrigez votre propre résumé si vous aviez franchi cette ligne.

Il ne vous remercie pas d’avoir fait quelque chose d’extraordinaire. Il recommence simplement à vous répondre sans peser chaque syllabe.`,{effect:{flag:'malik_corrected',rel:{malik:2}},note:'Le résumé du rôle de Malik distingue une alerte technique de la connaissance d’un futur incendie.'}),
A('Lui proposer d’être accompagné',`Vous lui donnez le contact d’un conseil distinct de ceux des entreprises concernées. Malik hésite à « faire une histoire », puis regarde le rapport qui porte déjà son nom.

Il accepte de prendre rendez-vous. Vous ne participez pas à cet entretien : certaines conversations doivent pouvoir exister sans vous fournir une nouvelle scène.`,{effect:{flag:'malik_supported',rel:{malik:1}},note:'Malik a reçu un contact indépendant pour être conseillé sur sa situation.'}),
A('Lui demander de confirmer publiquement son alerte',`Malik peut confirmer le document. Il ne veut pas être présenté comme la personne qui vous a livré toute l’explication.

S’il vous fait confiance, il accepte une formulation précise. Sinon, il préfère transmettre ses pièces par son conseil. Dans les deux cas, vous devrez travailler avec la limite qu’il fixe.`,{relation:['malik',1],success:'Il valide une courte déclaration qui pourra accompagner les pièces.',fail:'Il préfère une transmission par intermédiaire et refuse la déclaration publique.',successEffect:{flag:'malik_statement',proof:1},note:'La possibilité d’une déclaration publique de Malik dépend de ses conditions de citation.'})]),
L('Nora','Réécrire le titre mental',`Nora efface une phrase de son brouillon. Vous avez tous deux été tentés par une histoire plus compacte que les faits.`,[
A('Séparer les trois questions dans le dossier',`Vous créez des sections distinctes : le feu, l’entretien, le relogement. Chaque pièce trouve sa place, certaines étant reliées à plusieurs sections sans devenir interchangeables.

La structure demande plus d’efforts au lecteur. Elle lui permet aussi de comprendre pourquoi une réponse favorable sur un point ne blanchit pas automatiquement tous les autres.`,{effect:{flag:'three_questions',proof:2},note:'Le dossier sépare départ de feu, entretien et décisions de relogement.'}),
A('Conserver une hypothèse alternative comme telle',`Vous gardez les questions non résolues dans une page séparée. Elles ne sont ni interdites ni présentées comme des faits.

Nora ajoute une date de mise à jour. Vous pourrez revenir dessus avec de nouvelles pièces, sans devoir défendre une certitude ancienne pour préserver votre amour-propre.`,{effect:{flag:'hypotheses_marked',skill:{calm:1}},note:'Les hypothèses non établies sont séparées des conclusions du dossier.'}),
A('Relire ce que les habitants attendent',`Certains veulent un logement. D’autres veulent qu’on reconnaisse une signature détournée. Aucun ne vous a demandé de fabriquer un récit parfait pour qu’on accepte de l’aider.

Vous reprenez leurs demandes à côté de vos questions. Elles ne se superposent pas toujours. Vous décidez de les faire apparaître toutes les deux dans la suite.`,{effect:{flag:'needs_recentered',rel:{sam:1,nora:1}},note:'Les attentes des habitants restent distinctes des questions de l’enquête.'})])],
D('Renoncer à une certitude.',`Vous aviez peut-être imaginé une intention unique derrière toute l’affaire. Les pièces montrent un accident, des défauts, des intérêts et des décisions qui ont utilisé l’urgence.`,[
C('Raconter cette complexité clairement',`Vous acceptez que le récit demande plusieurs phrases. La clarté ne signifie pas que tous les faits doivent désigner le même geste ou la même personne.`,{flag:'complexity_kept',proof:2}),
C('Concentrer la suite sur le relogement',`Vous laissez les questions techniques à l’expertise. Votre dossier suivra ce que les signatures, les formulaires et les courriers ont fait aux habitants.`,{flag:'relocation_focus',proof:1}),
C('Continuer à soupçonner un plan unique',`Vous gardez cette conviction, mais les documents ne l’établissent pas. Si vous la publiez comme une conclusion, elle donnera à vos contradicteurs une cible plus facile que les faits vérifiés.`,{flag:'single_plot',exposure:2}),
C('Demander deux enquêtes indépendantes',`Vous recommandez de séparer l’expertise technique du contrôle des décisions administratives. Les réponses pourront arriver à des rythmes différents sans annuler les questions restantes.`,{flag:'two_inquiries',proof:1})]));

B('La nuit des copies.','L’appartement familial','Jeudi',1020,105,
`Vous trouvez votre porte fermée et vos affaires à leur place. Le message sur votre téléphone suffit pourtant à rendre la pièce étrangère : « Vous diffusez des documents incomplets. Appelez avant demain. » Le numéro appartient au service juridique d’Aster.

Nora reçoit une demande similaire. Il ne s’agit pas d’un inconnu qui vous poursuit dans un couloir, mais d’une pression assez ordinaire pour être difficile à raconter. Vous avez besoin de vérifier vos copies, de répondre avec précision et de dormir un peu.

Inès propose de rester. Vous pouvez accepter sa présence sans lui confier automatiquement toutes les décisions.`,
'Sécuriser le dossier et préparer les réponses aux contestations.',[
L('Les pièces contestées','Une critique peut être utile',`Aster affirme qu’une annexe manque à une copie. Vous pouvez chercher si c’est vrai avant de chercher pourquoi on vous le dit.`,[
A('Contrôler l’annexe signalée',`L’annexe existe et précise une procédure de recours. Elle ne résout pas la question des courriers envoyés aux mauvaises adresses. Vous l’ajoutez au dossier avec la réponse qu’elle permet et la question qu’elle laisse ouverte.

Reconnaître ce manque ne rend pas toutes vos pièces fausses. Cela vous évite surtout de demander aux autres une rigueur que vous refuseriez pour vous.`,{effect:{flag:'missing_appendix_added',proof:2},note:'L’annexe de recours a été ajoutée ; elle ne répond pas aux erreurs d’adresse.'}),
A('Vérifier les copies reçues par Nora',`Vous comparez les inventaires. Un fichier porte un nom légèrement différent mais une empreinte identique. Un autre est une version expurgée, pas un original modifié.

Vous clarifiez les noms pour qu’une confusion de fichiers ne devienne pas demain une accusation de manipulation. Nora suit votre liste et confirme chaque pièce.`,{test:['technique',4],success:'Les copies sont alignées et leurs différences sont expliquées dans l’inventaire.',fail:'Vous trouvez une ambiguïté que vous laissez marquée pour vérification par Adèle.',successEffect:{flag:'copies_checked',proof:2},effect:{skill:{technique:1}},note:'L’inventaire distingue les originaux, les copies et les versions expurgées.'}),
A('Rédiger une réponse aux objections',`Vous répondez point par point. Là où une correction est justifiée, vous la faites. Là où l’objection ne répond pas à la question, vous le signalez sans lui prêter une intention que vous ne pouvez pas établir.

Le texte est moins satisfaisant qu’une réplique. Il sera plus utile à quelqu’un qui devra comprendre le désaccord sans avoir vécu votre colère.`,{effect:{flag:'objections_answered',proof:1,skill:{calm:1}},note:'Une réponse écrite détaille les corrections acceptées et les désaccords persistants.'})]),
L('Inès dans la cuisine','La fatigue rend les mots plus courts',`Elle a apporté de quoi manger. Votre présence commune ressemble à une ancienne soirée jusqu’à ce qu’un téléphone s’allume.`,[
A('Lui demander une copie de sa déclaration',`Inès vous montre le relevé de ses propres modifications. Elle a ajouté une fiche que vous ignoriez, où sa correction a pu faciliter une clôture erronée. Elle ne la dissimule pas sous les autres.

Vous lui dites que vous l’aimez avant de lui dire que cette fiche doit rester dans le dossier. Elle reçoit les deux phrases sans vous demander de choisir.`,{effect:{flag:'ines_full_statement',proof:2,rel:{ines:1}},note:'La déclaration d’Inès inclut une fiche dont la correction a pu faciliter une clôture erronée.'}),
A('Faire une vraie pause avec elle',`Vous mangez en parlant d’un film que vous avez tous deux détesté pour des raisons différentes. La conversation vous rend une part de votre relation que l’enquête avait occupée sans demander.

Avant de retourner au bureau, Inès vous dit votre phrase : « {phrase} ». Cette fois, elle n’est ni un indice ni une preuve d’identité.`,{effect:{flag:'sibling_pause',rel:{ines:2},skill:{calm:1}},note:'Vous avez partagé un moment ordinaire avec Inès.'}),
A('Travailler seul ce soir',`Vous lui demandez de rentrer et lui promettez un appel à la fin de la soirée. Vous avez besoin de lire sans mesurer chaque réaction sur son visage.

Elle vous laisse le repas. Vous la rappelez avant de fermer l’ordinateur, même si vous n’avez rien de nouveau à annoncer. Tenir une petite parole peut compter autant qu’une grande déclaration.`,{effect:{flag:'called_sister',rel:{ines:1},skill:{observation:1}},note:'Vous avez rappelé Inès comme convenu après avoir travaillé seul.'})]),
L('Les transmissions','Ne pas devenir l’unique copie',`Les pièces peuvent être conservées à plusieurs endroits. Les coordonnées privées ne doivent pas voyager automatiquement avec les documents utiles.`,[
A('Séparer les identités des pièces publiques',`Vous créez une table de correspondance distincte. Les documents publics portent des références ; les identités restent dans une copie réservée aux personnes autorisées.

Cela ne rend pas toute réidentification impossible. Vous examinez aussi les détails de lieu et de famille qui pourraient permettre de reconnaître quelqu’un sans lire son nom.`,{effect:{flag:'protected_list',fulfill:'names',fulfill2:'lucieprivacy',proof:1},note:'Les identités et coordonnées ont été séparées des documents destinés à circuler.'}),
A('Confier une copie au conseil des habitants',`Le conseil accuse réception d’un inventaire, puis demande une précision sur deux sources. Vous répondez avant de considérer la transmission terminée.

La copie n’est plus seulement à l’abri d’une panne. Elle est entre les mains d’une personne dont le rôle est distinct du vôtre et de celui de Nora.`,{effect:{flag:'counsel_backup',proof:2},note:'Une copie inventoriée a été remise au conseil des habitants.'}),
A('Conserver une copie pour chaque témoin',`Vous préparez les passages attribués à chacun avec leurs pièces associées. Les témoins ne recevront pas les données privées des autres.

Cette distribution prend du temps. Elle leur permet de vérifier ce que vous faites de leur parole et de garder une trace qui ne dépendra plus de votre disponibilité.`,{cost:20,effect:{flag:'witness_copies',rel:{sam:1,malik:1,nora:1}},note:'Des copies limitées à leurs propres informations ont été préparées pour les témoins.'})])],
D('Répondre à la pression.',`Le service juridique demande votre réponse avant le lendemain. Vous avez le droit de répondre, de demander un délai ou de passer par un conseil. Le silence ne sera pas une solution sans effet.`,[
C('Envoyer la réponse vérifiée',`Vous joignez la liste des pièces et les corrections effectuées. Le désaccord demeure, mais il porte désormais sur un texte précis plutôt que sur la menace de ce que vous pourriez dire.`,{flag:'formal_reply',proof:1}),
C('Faire répondre le conseil des habitants',`Vous transmettez les éléments nécessaires et laissez le conseil établir sa réponse. Votre dossier n’a pas besoin de votre voix à chaque étape pour continuer à exister.`,{flag:'counsel_reply',proof:1}),
C('Demander un délai argumenté',`Vous expliquez quelles vérifications restent en cours et proposez une date. Ce délai vous sera peut-être reproché, mais vous l’avez lié à un travail identifiable.`,{flag:'deadline_extension',skill:{calm:1}}),
C('Publier immédiatement le message reçu',`Vous rendez la pression visible. Des soutiens arrivent, mais le débat se déplace vers votre conflit avec Aster. Les habitants doivent rappeler pourquoi l’affaire les concernait avant de vous concerner.`,{flag:'pressure_public',exposure:2,rel:{sam:-1,nora:1}})]));

B('La contre-proposition.','La salle de médiation','Vendredi',480,100,
`La proposition écrite d’Aster est arrivée pendant la nuit. Elle promet la réouverture de dossiers, un fonds d’aide et un calendrier. En échange, certaines formulations limitent les contestations ultérieures. La différence entre une aide et une renonciation tient parfois dans une phrase que personne n’a envie de lire le matin.

Farida, Sam, le conseil des habitants et un représentant d’Aster se retrouvent autour d’une table. Vous êtes présent parce que vous avez contribué au dossier, pas parce que vous possédez les décisions des autres.

Le représentant vous demande qui a mandat pour parler. Pour une fois, sa question est utile.`,
'Examiner une réparation concrète et les contreparties qu’elle contient.',[
L('Le projet d’accord','Lire ce qui coûte',`Le texte compte douze pages. Les sommes sont lisibles. Les conditions le sont moins, sans être pour autant cachées.`,[
A('Isoler la renonciation générale',`Une clause prévoit que le versement règle définitivement tous les différends liés au relogement. Le conseil explique que son effet pourrait dépasser les sommes discutées aujourd’hui.

Vous demandez que l’aide immédiate soit séparée des éventuelles renonciations. Le représentant d’Aster transmet la demande. Il ne peut pas l’accepter seul.`,{effect:{flag:'waiver_challenged',proof:1},note:'Une séparation entre aide immédiate et renonciation générale a été demandée.'}),
A('Vérifier le calendrier des aides',`Le premier paiement dépend de la signature de tous les dossiers. Une seule situation complexe pourrait retarder les autres. Farida demande des versements individuels, sans obligation de résultat collectif.

Cette modification ne fait pas un grand titre. Elle peut pourtant déterminer si une famille paie son prochain loyer. Vous l’inscrivez parmi les conditions prioritaires.`,{effect:{flag:'individual_payments',rel:{sam:1}},note:'Des versements individuels, indépendants de la clôture de tous les dossiers, ont été demandés.'}),
A('Demander un suivi extérieur',`Le projet laisse Aster vérifier sa propre réussite. Vous proposez un suivi comprenant les habitants et une personne indépendante. Les indicateurs devront porter sur les situations réelles, pas seulement sur le nombre de cases fermées.

Le représentant note la demande sans sourire. Il comprend que vous avez lu le premier contrat.`,{effect:{flag:'external_monitor',proof:1},note:'Un suivi extérieur fondé sur les situations réelles a été demandé.'})]),
L('Sam et Farida','Des besoins qui ne s’alignent pas',`Sam a besoin d’un logement proche du garage. Farida défend des personnes qui ne sont pas toutes venues. Elle tient à distinguer ce qu’elles ont dit de ce qu’elle suppose bon pour elles.`,[
A('Demander à chacun ses lignes rouges',`Sam ne veut pas renoncer à contester une signature qu’il n’a pas donnée pour cet usage. Une famille accepte une transaction limitée si elle peut enfin déménager. Une autre veut attendre une décision extérieure.

Vous notez des choix distincts. Il n’existe pas de phrase unique qui vous dispenserait de les respecter tous.`,{effect:{flag:'red_lines',rel:{sam:1}},note:'Les lignes rouges diffèrent selon les habitants ; aucun mandat collectif total n’existe.'}),
A('Aider Sam à préciser sa demande',`Vous relisez sa demande de logement avec lui. Il ajoute la distance au travail, la garde de son frère et les transports disponibles. Ces détails font apparaître une solution concrète au lieu d’une opposition abstraite à toute proposition.

Farida transmet la demande accompagnée des justificatifs. Sam repart avec une copie, pas seulement une assurance orale.`,{effect:{flag:'sam_home',rel:{sam:1}},note:'La demande de Sam est documentée par ses contraintes de travail, de famille et de transport.'}),
A('Écouter une personne favorable à l’accord',`Elle ne nie pas les problèmes. Elle dit qu’elle ne peut pas attendre deux ans pour choisir où dormir le mois prochain. Vous retenez votre envie d’expliquer une fois de plus le risque de renonciation.

Le conseil l’expliquera ; elle décidera. Votre rôle n’est pas de transformer son urgence en faute morale.`,{effect:{flag:'urgency_heard',skill:{empathy:1}},note:'Certaines personnes privilégient une aide rapide malgré les limites de l’accord.'})]),
L('Le représentant d’Aster','Ce qu’il peut réellement engager',`Il n’est pas Veyre. Il a un mandat limité et doit appeler son siège pour certaines modifications. Vous pouvez utiliser cette limite sans lui attribuer toutes les décisions de son employeur.`,[
A('Obtenir les modifications par écrit',`Après deux appels, il accepte de retirer la condition de signature collective. La renonciation générale reste en discussion. Vous demandez une version propre avec les changements visibles et une date.

Le progrès est partiel. Vous l’enregistrez comme tel, au lieu de le présenter comme un accord complet ou comme un échec total.`,{effect:{flag:'revised_offer',proof:1},note:'Aster accepte de retirer la condition de signature collective ; la renonciation reste en discussion.'}),
A('Demander une reconnaissance des erreurs',`Il propose le mot « dysfonctionnements ». Vous demandez qu’il soit accompagné d’exemples précis : erreurs d’adresse, usages contestés de signatures, clôtures sans vérification.

Une reconnaissance qui ne nomme rien laisse trop de place à des souvenirs incompatibles. Le représentant accepte d’inscrire les exemples dans un projet, sous réserve de validation.`,{effect:{flag:'named_errors',proof:1},note:'Des exemples précis doivent accompagner toute reconnaissance des dysfonctionnements.'}),
A('Refuser une photo de la réunion',`Le service de communication a proposé une image « de dialogue retrouvé ». Vous demandez l’accord explicite de chaque personne, puis refusez d’apparaître sur une photo qui pourrait annoncer un résultat avant l’accord.

Le représentant range son téléphone. La réunion peut continuer sans devenir la preuve visuelle de sa propre réussite.`,{effect:{flag:'no_staged_photo',rel:{sam:1}},note:'Aucune photo de communication n’est prise pour annoncer prématurément un accord.'})])],
D('Ce que vous recommandez.',`Le conseil explique les clauses. Les habitants décideront individuellement. On vous demande toutefois quelle voie vous recommanderiez au vu des pièces.`,[
C('Accepter les aides sans renonciation générale',`Vous recommandez de séparer l’urgence matérielle et la recherche des responsabilités. La proposition devra encore être validée, mais votre position est claire et limitée.`,{flag:'aid_without_waiver',rel:{sam:1}}),
C('Poursuivre une négociation encadrée',`Vous pensez qu’un accord peut améliorer les situations s’il reste contrôlé et documenté. Vous ne demandez à personne d’en faire la seule voie possible.`,{flag:'negotiated_repair',proof:1}),
C('Privilégier une procédure indépendante',`Vous recommandez de ne pas signer une renonciation aussi large. Vous précisez aussi les délais et l’incertitude de la procédure ; vous ne les faites pas disparaître derrière le mot justice.`,{flag:'legal_priority',proof:1}),
C('Ne pas recommander un choix unique',`Vous expliquez les forces et les risques de chaque option, puis rendez la décision aux personnes concernées. Cela vous évite une place que personne ne vous avait réellement confiée.`,{flag:'choices_returned',rel:{sam:1},skill:{empathy:1}})]));

B('Les mots qu’on signe.','La rédaction de Nora','Vendredi',600,100,
`La rédaction tient dans trois pièces et une cuisine. Nora vous présente sa collègue, Bérénice, chargée de relire l’enquête. Elle ne vous connaît pas et ne partage pas la fatigue qui donne à chaque document une charge affective.

Elle pose des questions que vous trouvez d’abord agaçantes : comment le sait-on, qui le confirme, quelle pièce manque ? Puis vous comprenez que quelqu’un lira le récit sans vous avoir accompagné. Cette personne aura besoin de réponses, pas de votre conviction.

Le titre n’est pas encore choisi. La page blanche au-dessus du texte est presque plus intimidante que les pages remplies.`,
'Relire les faits, les attributions et ce qui peut circuler.',[
L('Bérénice','Un regard qui ne vous doit rien',`Elle a imprimé le texte avec de grandes marges. Les marques rouges ne signifient pas toutes qu’elle doute ; parfois elle veut seulement retrouver la pièce.`,[
A('Vérifier chaque affirmation centrale',`Vous associez les phrases aux documents. Certaines reposent sur deux sources, d’autres sur une seule qu’il faut nommer comme telle. Deux phrases disparaissent faute d’appui suffisant.

Vous avez l’impression de perdre du travail. Bérénice vous montre que les questions restent dans le carnet. Elles ne sont simplement pas encore des conclusions.`,{effect:{flag:'fact_checked',proof:2},note:'Les affirmations centrales ont été reliées à leurs pièces.'}),
A('Vérifier les réponses des personnes mises en cause',`Les réponses de Veyre et Sorel sont longues. Vous conservez ce qui répond aux questions, sans supprimer les dénégations parce qu’elles vous irritent.

Bérénice ajoute la date des demandes et les points restés sans réponse. L’absence de réponse n’est pas présentée comme la preuve automatique du fait contesté.`,{effect:{flag:'right_reply',proof:1},note:'Les réponses et les points non répondus sont attribués et datés.'}),
A('Contrôler le passage sur ma famille',`Bérénice vous demande de quitter la pièce pendant qu’elle interroge Inès. Votre premier mouvement est de protester, puis vous reconnaissez la règle demandée pour d’autres.

Le texte mentionne la mission d’Inès, ses corrections et son rôle ultérieur. Votre père apparaît seulement là où une pièce justifie sa présence.`,{effect:{flag:'family_factcheck',proof:2,rel:{ines:1}},note:'La partie concernant votre famille a été vérifiée par une personne extérieure.'})]),
L('Les témoins','Ce qu’on attribue à chacun',`Nora a préparé des extraits séparés. Les témoins relisent leurs propres propos ; ils ne reçoivent pas un droit de veto sur tout le travail.`,[
A('Faire confirmer les paroles de Sam',`Sam corrige une ponctuation qui faisait paraître sa phrase sarcastique. Le fond ne change pas. Il demande si sa demande de logement figurera aussi, pour qu’il ne reste pas seulement « le jeune qui témoigne ».

Vous ajoutez son attente concrète, avec son accord.`,{effect:{fulfill:'samreview',flag:'sam_reviewed',rel:{sam:1}},note:'Sam a confirmé ses paroles et demandé que son attente de logement apparaisse.'}),
A('Confirmer les conditions de Lucie',`Lucie lit la version sans coordonnées privées. Elle demande que le texte indique clairement ce qu’elle reconnaît avoir signé elle-même.

Vous lui faites aussi écouter l’extrait de cassette choisi. Elle écoute jusqu’au bout, y compris le silence qui suit, puis autorise cet extrait précis.`,{effect:{fulfill:'lucieprivacy',fulfill2:'lucieconsult',flag:'protected_lucie',flag2:'lucie_consent',proof:1},note:'Lucie autorise un extrait précis et la version expurgée de son témoignage.'}),
A('Vérifier les limites posées par Thomas',`Son nom reste présent ; son adresse et les détails de sa santé sont absents. Le texte conserve les dates qui contredisent sa première version.

Il demande un changement de vocabulaire que Bérénice accepte, puis une suppression qu’elle refuse en expliquant pourquoi. Il confirme néanmoins que ses paroles sont correctement rapportées.`,{effect:{flag:'thomas_reviewed',proof:1},note:'Thomas confirme ses propos ; la contradiction documentaire reste dans le récit.'})]),
L('La liste à part','Ce qui n’a pas besoin d’être publié',`La liste des habitants contient aussi des renseignements dont le public n’a pas besoin pour comprendre le mécanisme.`,[
A('Retirer les détails identifiants',`Vous retirez les coordonnées, puis cherchez les combinaisons de détails qui permettraient de reconnaître quelqu’un sans son nom. Un étage, un métier rare et une composition familiale peuvent suffire.

La version publique explique les retraits sans transformer cette protection en mystère de plus.`,{effect:{flag:'protected_list',fulfill:'names',proof:1},note:'La version publique retire les détails identifiants inutiles.'}),
A('Préparer une annexe pour les conseils',`Les documents complets restent dans une annexe distincte, avec les autorisations et les conditions de transmission. Les conseils pourront les utiliser sans reconstruire ce que les journalistes ont retiré.

Vous notez la correspondance entre la copie complète et la version publique.`,{effect:{flag:'sealed_names',fulfill:'names',proof:1},note:'Une annexe réservée aux conseils conserve les identités et leurs conditions de transmission.'}),
A('Conserver les noms pour rendre le récit concret',`Certaines personnes ont accepté d’être nommées ; d’autres non. Votre besoin de rendre le texte vivant ne vaut pas autorisation générale.

Vous conservez les noms explicitement consentis. Les autres restent une décision à résoudre avant diffusion.`,{effect:{flag:'identities_pending',exposure:1},note:'Les identités sans consentement restent à résoudre avant diffusion.'})])],
D('Le titre et la promesse.',`Le titre orientera le regard avant la première pièce. Il doit promettre ce que le texte peut réellement donner.`,[
C('Mettre en avant les signatures et leurs usages',`Le titre décrit un mécanisme vérifiable. Il ne dit pas tout, mais ne vous oblige pas à défendre une histoire plus large que les pièces.`,{flag:'document_title',proof:1}),
C('Mettre en avant les vies déplacées',`Le récit commencera par les conséquences concrètes, avec les accords recueillis. Les documents viendront expliquer pourquoi ces situations se sont prolongées.`,{flag:'people_title',rel:{sam:1}}),
C('Insister sur les décisions après les alertes',`Les dates de connaissance et de décision seront centrales. Les réponses des responsables apparaîtront près des pièces qui les concernent.`,{flag:'accountability_title',proof:1}),
C('Choisir un titre très accusateur',`Le titre circulera facilement. Bérénice garde le texte plus précis que lui. Le débat pourrait se concentrer sur le titre avant d’arriver aux habitants.`,{flag:'accusatory_title',exposure:2})]));

B('Le dernier tour.','Les lieux de Rivebrune','Vendredi',720,105,
`Vous pourriez croire que tout se termine devant un bouton d’envoi. Il reste pourtant des gens à rappeler, un objet à rendre, une promesse dont vous n’avez pas vérifié l’échéance. La ville continue autour de la conclusion que vous lui préparez.

Inès vous accompagne. Elle ne vous demande plus si vous avez compris ; elle demande ce qui reste à faire. Certains engagements sont tenus, d’autres ont expiré. Une case ne contient pas le sentiment de la personne qui vous attendait.

Vous avez quelques heures avant la réunion finale. Ce temps vous appartient encore.`,
'Revenir sur vos engagements et préparer la suite.',[
L('Sam et Farida','La suite concrète',`La permanence ouvre déjà à d’autres demandes. L’enquête n’a pas suspendu les besoins du quartier.`,[
A('Vérifier le suivi du logement de Sam',`Le dossier a un numéro, un interlocuteur et une prochaine date. Si vous l’aviez aidé, Sam a déjà réuni les pièces. Sinon, Farida commence avec lui maintenant.

Vous ne promettez pas un logement pour lundi. Vous vérifiez qu’il repartira avec davantage que « on vous rappellera ».`,{effect:{flag:'sam_home',rel:{sam:1}},note:'La demande de Sam dispose d’un suivi identifié et d’une prochaine date.'}),
A('Reconnaître une promesse oubliée',`Vous relisez les engagements non tenus et appelez les personnes concernées. Vous ne leur demandez pas de vous rassurer sur vos intentions.

Certaines ont trouvé une solution, d’autres restent fâchées. Vous proposez de réparer sans modifier rétroactivement ce qui s’est passé.`,{effect:{flag:'apologies_made',rel:{sam:1,malik:1}},note:'Vous avez reconnu les engagements manqués et proposé de réparer ce qui pouvait l’être.'}),
A('Organiser un relais après mon départ',`Vous réunissez les contacts avec leur accord. Farida garde le suivi, Nora les questions de publication, les conseils les pièces de procédure. Vous notez aussi qui ne souhaite plus être appelé.

Le réseau ne dépendra pas d’une seule personne restée en ville par inquiétude pour sa sœur.`,{effect:{flag:'handover',rel:{sam:1},proof:1},note:'Un relais est organisé après votre départ.'})]),
L('Malik et Élise','Les personnes qui reprendront leur travail',`Ils devront continuer à travailler avec une partie des gens que l’affaire met en difficulté.`,[
A('Confirmer les conditions de Malik',`Selon la confiance construite, Malik accepte une déclaration ou demande que les pièces passent par un intermédiaire. Vous respectez sa réponse sans la traiter comme une trahison.

Il vous remercie de lui avoir demandé une dernière fois.`,{effect:{flag:'malik_final_consent',rel:{malik:1}},note:'Les conditions de citation de Malik ont été confirmées.'}),
A('Vérifier les références avec Élise',`Élise corrige une cote, puis vous demande de ne pas la décrire comme quelqu’un qui aurait « ouvert les archives en cachette ».

Elle a fait son travail. Vous comprenez pourquoi elle tient à ce que cela soit dit ainsi.`,{effect:{flag:'elise_credited',rel:{elise:1},proof:1},note:'Les références d’archives et le rôle d’Élise sont correctement attribués.'}),
A('Rendre les originaux prêtés',`Les originaux retournent à leurs détenteurs ; les copies restent au dossier. Vous marquez ce qui a été rendu et à qui.

L’enquête vous avait donné l’impression d’accumuler. Sa fin commence par une manière de rendre. Les engagements en retard restent en retard, même si l’objet revient.`,{effect:{flag:'originals_returned',fulfill:'badge',remove:'badge',proof:1},note:'Les originaux prêtés ont été rendus ou leur conservation explicitement convenue.'})]),
L('Inès sur le chemin','Ce qui n’est pas une pièce',`Vous n’avez plus à choisir entre une conversation importante et la recherche d’une personne absente. Elle est là.`,[
A('Fixer une visite sans affaire à résoudre',`Vous choisissez une date et un repas. Inès propose de cuisiner quelque chose qu’elle rate depuis des années. Vous acceptez pour cette raison.

Le rendez-vous ne répare pas tout. Il donne à votre relation un événement futur qui ne dépend ni d’une enveloppe ni d’un silence à interpréter.`,{effect:{flag:'future_visit',rel:{ines:2}},note:'Une prochaine visite familiale est prévue sans lien avec l’enquête.'}),
A('Lui demander de respecter mes limites',`Vous dites ce que vous ne voulez plus : des messages incomplets pour vous mettre en mouvement, des décisions prises à votre place, l’idée que vous serez toujours disponible.

Inès écoute sans promettre de devenir une autre personne. Vous convenez d’un signal simple pour vous le rappeler.`,{effect:{flag:'clear_boundaries',rel:{ines:1},skill:{calm:1}},note:'Vous avez posé des limites claires avec Inès.'}),
A('Lui laisser une phrase pour la suite',`Vous choisissez de nouveaux mots, ou reprenez ceux déjà écrits. Ils ne serviront pas à ouvrir une archive. Ils resteront comme la version de vous qui existe à la fin de ces journées.`,{input:{prompt:'Quels mots voulez-vous garder pour la suite ?',store:'message'},customNote:'Vos mots pour la suite : ',effect:{flag:'final_words',rel:{ines:1}}})])],
D('Ce que vous emporterez.',`Le train du lendemain existe déjà sur votre billet. Quelle place cette histoire prendra-t-elle après votre départ ?`,[
C('Rester disponible avec des limites',`Vous proposez un rendez-vous de suivi plutôt qu’une présence permanente. Les personnes sauront quand vous joindre et qui appeler entre-temps.`,{flag:'bounded_followup',rel:{ines:1}}),
C('M’engager dans le suivi des habitants',`Vous définissez une place régulière avec Farida pour ne pas devenir une promesse vague ajoutée aux autres.`,{flag:'long_followup',rel:{sam:1}}),
C('Transmettre le dossier et prendre du recul',`Vous préparez une remise complète puis annoncez votre retrait. Les pièces et les contacts permettront de continuer sans vous.`,{flag:'step_back',skill:{calm:1}}),
C('Continuer avec Inès et Nora',`Vous gardez un groupe de travail. Il faudra veiller à ne pas décider à trois de tout ce qui concerne les autres.`,{flag:'small_team',rel:{ines:1,nora:1}})]));

B('La table entière.','La réunion finale','Vendredi',900,110,
`Pour la première fois, les pièces principales sont réunies : relevés, formulaires, courriers, récits relus et réponses contestées. Il manque encore des choses. Vous savez lesquelles, et c’est un progrès immense sur le début.

Nora a préparé une version publique. Le conseil des habitants dispose d’une transmission distincte. Aster maintient une proposition révisée. La ville annonce un réexamen dont il faudra surveiller les conditions.

Personne ne vous remet un bouton capable de tout réparer. Vous pouvez choisir le rôle que votre dossier jouera d’abord, puis accepter que le reste dépende aussi d’autres personnes.`,
'Vérifier votre dossier avant la dernière décision.',[
L('Les preuves','Ce qui soutient le récit',`Le conseil propose une dernière vérification. Vous n’avez pas besoin d’ajouter une découverte spectaculaire pour que le travail ait une valeur.`,[
A('Faire la synthèse des faits établis',`Des signatures ont changé d’usage entre des versions de formulaires. Des dossiers ont été clos alors que les courriers n’atteignaient plus leurs destinataires. Les indicateurs favorisaient la clôture, et plusieurs alertes n’ont pas produit de correction suffisante.

Les responsabilités individuelles demandent encore un examen. Toutes ces phrases peuvent tenir ensemble.`,{effect:{flag:'final_synthesis',proof:1},note:'La synthèse distingue les mécanismes établis et les responsabilités à examiner.'}),
A('Relire les limites du dossier',`Certaines pièces sont des copies ; certaines voix ne sont pas identifiées ; certains témoins ne souhaitent pas parler publiquement. L’origine accidentelle du feu ne résout pas les questions d’entretien ou de relogement.

Vous placez ces limites près des conclusions, pas dans une note invisible.`,{effect:{flag:'limits_visible',proof:1},note:'Les limites documentaires sont présentées avec les conclusions.'}),
A('Vérifier les autorisations',`Vous comparez les noms de la version publique avec les accords recueillis. Là où l’autorisation manque, vous retirez l’identité et gardez le fait sous une forme vérifiable par les conseils.

Ce choix peut diminuer la force d’une scène. Il évite de disposer une dernière fois de la vie des autres à leur place.`,{effect:{flag:'protected_list',fulfill:'names',fulfill2:'lucieprivacy'},note:'Les identités non autorisées sont retirées de la version publique.'})]),
L('Les personnes','Des attentes différentes',`Sam, Lucie et Inès ne demandent pas la même chose. Leurs paroles ne sont pas des votes à additionner.`,[
A('Écouter Sam',`Il veut que son histoire serve, mais souhaite passer une semaine sans être appelé pour expliquer un formulaire. Il demande que la prochaine date de suivi soit fixée avant que les téléphones se mettent à sonner.

Vous vérifiez le calendrier avec Farida. La décision finale ne doit pas effacer ce petit rendez-vous.`,{effect:{flag:'sam_followup_date',rel:{sam:1}},note:'Une prochaine date de suivi est fixée pour Sam.'}),
A('Écouter Lucie',`Elle sait que son témoignage peut lui coûter. Elle ne veut pas que cette peur soit interprétée comme une demande de silence.

Elle confirme ses autorisations et remercie aussi de laisser dans le récit le formulaire qu’elle a elle-même signé à tort. Elle n’aura pas à défendre une version fausse d’elle-même.`,{effect:{flag:'lucie_final',proof:1},note:'Lucie confirme ses autorisations et la mention de sa propre responsabilité.'}),
A('Écouter Inès',`Elle dit qu’elle aurait voulu vous épargner ces journées. Vous lui demandez si elle parle encore d’épargner ou de choisir à votre place. Elle réfléchit.

« J’aurais dû te demander si tu voulais venir. » Vous ne pouvez pas rejouer le début. Vous pouvez reconnaître qu’elle formule enfin la bonne question.`,{effect:{flag:'ines_understood',rel:{ines:1}},note:'Inès reconnaît qu’elle aurait dû vous demander explicitement de venir.'})]),
L('Les quatre voies','Ce que chacune change',`Les voies pourront coexister. Votre choix déterminera celle que vous porterez d’abord.`,[
A('Comparer publication et transmission indépendante',`La publication rend les contradictions visibles. Elle expose aussi les personnes citées et peut déplacer le débat vers la réputation des responsables.

La transmission indépendante préserve un cadre d’examen, avec des délais moins prévisibles. Vous refusez de vendre l’une comme une solution magique contre l’autre.`,{effect:{flag:'routes_compared'},note:'Les voies publique et indépendante ont été comparées avec leurs délais.'}),
A('Comparer réparation et contrôle municipal',`Une réparation négociée peut produire des aides concrètes, sous réserve de ses clauses. Un contrôle municipal peut rouvrir rapidement des dossiers, tout en laissant la ville examiner une partie de son propre travail.

Conserver les pièces et des regards extérieurs empêchera une annonce de devenir toute la conclusion.`,{effect:{flag:'repair_compared'},note:'Les réparations et contrôles devront rester suivis par des regards extérieurs.'}),
A('Organiser la continuité du dossier',`Vous rendez les inventaires, contacts et calendriers accessibles aux personnes autorisées. Aucun choix final ne doit rendre les autres suites impossibles.

Vous avez commencé avec une enveloppe reçue seul dans une gare. Plusieurs personnes peuvent désormais continuer sans attendre votre prochain message.`,{effect:{flag:'continuity',proof:1,rel:{sam:1,nora:1}},note:'La continuité du dossier est organisée quelle que soit la voie choisie.'})])],
D('La version que vous assumez.',`Quel principe accompagnera votre dossier ?`,[
C('Montrer les faits, les limites et les réponses',`Ce que vous avez établi peut être discuté ; ce que vous ignorez peut être recherché. Rien n’a besoin d’être inventé pour que l’affaire compte.`,{flag:'transparent_dossier',proof:2}),
C('Mettre les habitants au centre du suivi',`Chaque annonce devra correspondre à une situation concrète : une adresse, une aide, une possibilité de recours.`,{flag:'people_followup',rel:{sam:1}}),
C('Insister sur les responsabilités documentées',`Vous refusez qu’une série de corrections fasse disparaître les décisions prises après les alertes. Les personnes citées pourront répondre aux pièces précises.`,{flag:'responsibility_focus',proof:1}),
C('Chercher le résultat le plus rapide',`Vous faites peser l’urgence matérielle plus lourd. Vous gardez les pièces pour que cette priorité ne devienne pas un oubli imposé aux autres.`,{flag:'speed_priority'})]));

B('Ce que l’on rend public.','Rivebrune, à la nuit tombante','Vendredi',1080,90,
`Le ciel prend la couleur du soir de votre arrivée. La ville n’a pas changé de forme. Certaines relations, si. Vous savez pourquoi l’enveloppe avait deux écritures, pourquoi Inès s’était tue et comment des signatures ordinaires avaient été déplacées jusqu’à dire autre chose.

Vous avez trouvé des personnes, des intérêts, des habitudes et des alertes que plusieurs responsables ont laissé se perdre. Vous avez aussi trouvé des gens qui avaient gardé des doubles.

La dernière décision n’effacera aucune des précédentes. Elle leur donnera une première destination.`,
'Choisir la première destination de votre travail.',[
L('Votre copie','Dernière préparation',`Le dossier est prêt. Il reste le temps d’une vérification et d’une transmission.`,[
A('Contrôler les références',`Vous parcourez les cotes et les dates. Une coquille est corrigée ; une note renvoie vers la bonne annexe. Aucun secret supplémentaire n’apparaît.

C’est une bonne nouvelle. Vous n’avez plus besoin d’une révélation pour repousser le moment de décider.`,{effect:{flag:'final_checked',proof:1},note:'Les références finales ont été contrôlées.'}),
A('Vérifier la protection des personnes',`Vous retirez une dernière adresse apparue dans une capture. Le fait reste compréhensible. La version complète rejoint l’annexe réservée.

Votre dossier n’a pas besoin d’exposer quelqu’un à son ancienne peur pour montrer que cette peur a existé.`,{effect:{flag:'sealed_names',fulfill:'names',fulfill2:'lucieprivacy'},note:'Une dernière vérification des coordonnées privées a été effectuée.'}),
A('Laisser une copie et un calendrier',`Les personnes qui poursuivront n’auront pas à deviner ce que signifient vos fichiers ou vos silences.

Vous avez transformé une enquête personnelle en un travail transmissible. Cela compte même si votre nom n’apparaît pas au premier plan de la suite.`,{effect:{flag:'handover_complete',proof:1},note:'Le calendrier et le lieu de conservation sont confirmés.'})]),
L('Le dernier appel','Votre voix',`Nora et Inès attendent votre réponse. Vous n’avez pas besoin de leur parler de la même façon.`,[
A('Appeler Nora',`Vous dites la voie envisagée et écoutez ses objections. Elle assumera ses propres choix de journaliste, même si vous ne partagez pas chaque décision.

Vous convenez de ne pas faire passer un désaccord entre vous pour la preuve que le dossier s’est effondré. Les pièces n’appartiennent pas à votre entente.`,{effect:{flag:'nora_final_call',rel:{nora:1}},note:'Vous et Nora distinguez vos décisions respectives du contenu du dossier.'}),
A('Appeler Inès',`Elle répond immédiatement. Cette banalité vous touche. Vous lui dites que vous déciderez en fonction des pièces, pas pour la punir ou la protéger.

Elle dit comprendre. Vous n’avez pas besoin de vérifier tout de suite si elle a entièrement raison. Vous terminez par « {phrase} ».`,{effect:{flag:'ines_final_call',rel:{ines:1}},note:'Votre dernier appel à Inès se termine par votre phrase familiale.'}),
A('Prendre quelques minutes seul',`Vous regardez les lumières du pont. Les gens passent sans savoir ce que vous allez faire. Vous n’avez pas besoin qu’ils le sachent pour que la décision ait un poids.

Vous relisez vos mots, puis revenez au dossier.`,{effect:{skill:{calm:1}},note:'Vous avez pris un dernier moment pour décider sans nouvelle pression.'})]),
L('Votre carnet','Ce qui vous appartient encore',`Il contient des faits, des promesses et vos mots. Vous pouvez le fermer sans faire disparaître ce qu’il contient.`,[
A('Relire le début de mon parcours',`Vous retrouvez les premières heures et les hypothèses corrigées. Certaines notes vous gênent.

Elles montrent que vous n’avez pas su la fin dès le début. Vous n’avez pas besoin de réécrire votre passé pour que votre décision présente soit honnête.`,{effect:{flag:'self_review',skill:{observation:1}},note:'Vous avez relu votre parcours sans effacer les hypothèses corrigées.'}),
A('Écrire la phrase que je veux garder',`La dernière page est libre. Un nom, une idée, une promesse personnelle ou quelques mots que vous ne voulez pas perdre. Personne ne les corrigera pour vous.`,{input:{prompt:'Quels mots voulez-vous garder de ces journées ?',store:'message'},customNote:'Votre dernière page : ',effect:{flag:'last_page'}}),
A('Fermer le carnet',`Vous replacez l’élastique autour de la couverture. Vos souvenirs ne sont pas devenus plus exacts parce que vous les avez écrits ; ils sont devenus plus faciles à confronter aux autres traces.

Il manque toujours la vie des personnes après que vous avez quitté la pièce.`,{effect:{flag:'notebook_closed'},note:'Vous avez fermé le carnet avant votre décision.'})])],
D('Votre décision.',`Les copies sont conservées. Les personnes concernées gardent leurs propres choix. Quelle voie porterez-vous en premier ?`,[
C('Rendre l’enquête publique avec Nora',`Nora prend sa décision éditoriale, puis le texte quitte la rédaction. Les pièces deviennent accessibles dans leur forme autorisée. Vous ne contrôlez plus les premières réactions.`,{ending:'public',flag:'published'}),
C('Transmettre le dossier à une instance indépendante',`Les conseils préparent les démarches. Vous demandez réception, suivi et conservation des pièces. Le résultat est moins visible qu’un article ; il existe désormais hors de vos appareils.`,{ending:'justice',flag:'filed'}),
C('Porter une réparation négociée et surveillée',`Vous appuyez l’accord avec les limites discutées. Personne n’est ajouté comme signataire à votre place. Les aides et le suivi devront être vérifiés dans les faits.`,{ending:'repair',flag:'repair_chosen'}),
C('Exiger un réexamen public des décisions municipales',`Vous rendez les questions et les pièces communicables au contrôle public. Vous demandez que les habitants participent au suivi et que les annonces soient confrontées au calendrier.`,{ending:'civic',flag:'civic_chosen'})]));

const ENDINGS={
public:{title:'Les premières réponses.',text:`Le texte paraît un samedi matin. Le lecteur découvre d’abord une signature, puis les deux choses différentes qu’on lui a fait dire. Les commentaires arrivent avant la fin de votre café.

Certains lisent les pièces. D’autres n’auront que le titre. Aster conteste des formulations, la ville annonce une vérification, des habitants que vous n’avez jamais rencontrés écrivent à Nora. Elle trie les messages : ce qui est raconté, ce qui est observé, ce qui peut être vérifié.

Vous avez rendu l’affaire plus difficile à ignorer. Les semaines suivantes demanderont des réponses aux besoins concrets, pas seulement aux questions qui font circuler l’article.`},
justice:{title:'Un dossier qui continue.',text:`Le dossier reçoit un numéro dans un courrier ordinaire. Les conseils expliquent les prochaines étapes et celles qui ne dépendront pas d’eux.

Des demandes de pièces partent. Des personnes sont recontactées. Certaines refusent toujours de parler ; leur refus ne devient pas automatiquement un aveu. Les documents conservés permettent des questions précises sans demander à chacun de recommencer son histoire chaque semaine.

La suite prendra du temps. Ce silence n’est plus celui du début : il existe un lieu où les pièces sont déposées, des personnes chargées de les suivre et des dates auxquelles demander ce qui a été fait.`},
repair:{title:'Ce qui se répare.',text:`Les réunions de suivi portent sur des sommes, des adresses et des dates. Les mots sont moins grands que ceux qui ont accompagné l’affaire. Une aide versée à temps peut pourtant changer une semaine entière.

Toutes les personnes ne choisissent pas l’accord. Certaines poursuivent d’autres démarches ; d’autres veulent seulement que leur dossier porte enfin la bonne information. Cette diversité ne constitue pas un échec de la réparation.

Le risque reste de confondre un versement avec la fin de toute question. Les pièces conservées et les regards extérieurs rappellent la différence. Une réparation peut être réelle et encore insuffisante.`},
civic:{title:'La salle ouverte.',text:`La première séance publique a lieu un soir de semaine. La salle est trop petite. Certains habitants font lire leur question par quelqu’un d’autre.

La ville présente son calendrier. Les versions conservées permettent de demander ce qui change réellement et ce qui est simplement reformulé. Les questions sans réponse sont consignées au lieu d’être perdues à la fin du temps de parole.

Une réunion peut devenir une scène de communication ou le début d’un contrôle durable. La différence se verra dans les rendez-vous suivants, les pièces accessibles et les décisions que les habitants pourront encore contester.`},
evidenceStrong:`Les vérifications extérieures retrouvent une grande partie de la chaîne reconstituée. Vos références permettent de corriger certains points sans jeter l’ensemble. Les faits établis tiennent assez bien pour continuer sans demander que toutes vos intuitions aient été justes.`,
evidenceWeak:`Les examens butent sur les pièces non recueillies ou non vérifiées. Les témoignages restent précieux, mais certaines affirmations doivent être reprises. L’affaire avance plus lentement, avec davantage de place pour les versions concurrentes. Une référence manquante pouvait compter autant qu’une conversation décisive.`,
peopleSafe:`Les coordonnées restent dans les copies réservées. Cela n’empêche pas toutes les reconnaissances, mais évite une partie des appels non souhaités. Jeanne vous remercie de ne pas avoir transformé sa maison actuelle en étape publique de l’enquête. Elle vous parle ensuite des piles de sa radio, comme si cela pouvait redevenir un sujet suffisant.`,
peopleExposed:`Des détails privés ont circulé plus largement que prévu. Vous aidez à retirer les copies encore accessibles sans prétendre rappeler toutes les autres. Les faits restent importants ; ceux qui vous ont parlé demandent pourquoi leur vie entière a dû les accompagner.`,
sisterClose:`Inès vous attend au café lors de votre prochaine visite. Elle a envoyé un message complet et répondu à votre appel. Votre relation contient désormais des limites dites à voix haute et la possibilité de demander de l’aide sans organiser une énigme.`,
sisterFar:`Inès écrit de temps en temps. Vous répondez sans retrouver immédiatement l’ancienne facilité. Comprendre une partie de ses raisons ne suffit pas à réparer la confiance. Un jour, vous recevrez un message qui ne parlera pas de l’affaire. Vous déciderez alors de la place à lui faire.`,
noraClose:`Nora vous envoie les prochaines corrections et questions. Elle n’attend plus une approbation totale. Vous pouvez vous signaler une erreur sans faire de chaque désaccord une menace. Un partenariat continue à la mesure de ce que vous pouvez lui donner.`,
noraFar:`Nora poursuit son travail. Les échanges sont plus rares. Les pièces communes existent sans que votre relation devienne plus simple ; c’est aussi une façon de résister à l’oubli.`,
samHome:`Le dossier de Sam a un interlocuteur et une prochaine étape. Une proposition plus proche du garage est étudiée. Il vous envoie une photo de son vélo réparé. Le message ne parle pas des Ormes. Vous êtes content de pouvoir répondre à autre chose.`,
samAway:`Sam cherche encore une solution près du travail. Farida l’aide, mais certaines démarches auraient gagné à être préparées plus tôt. Il ne vous demande pas de résoudre sa vie. La fin de votre enquête n’était simplement pas la fin de son trajet jusqu’au garage.`,
last:`Le train quitte Rivebrune. Votre carnet est rangé. Les lumières du quai glissent sur la vitre jusqu’à ce qu’il ne reste que votre reflet.

Un message ordinaire apparaît sur votre téléphone : « {phrase} ».

Cette fois, vous n’avez pas besoin de chercher ce qu’il cache.

FIN`};

// Earlier choices return at later encounters; these passages remain hidden until reached.
BOOK[8].echo=[{flag:'archive_open',text:'La copie ouverte chez vous vous permet de demander les admissions sous leur référence exacte.'},{flag:'archive_failed',text:'La copie de secours donne les références, mais vous devrez demander sur place les documents que vous n’avez pas pu ouvrir.'}];
BOOK[10].echo=[{flag:'wide_copy',text:'Un détail provenant de votre copie intégrale apparaît dans un message public. Vous ne pouvez pas identifier la personne qui l’a repris, mais vous reconnaissez le document que vous avez fait circuler.'},{flag:'sam_review',text:'Sam vous rappelle votre promesse : il veut relire les mots qui lui seront attribués.'}];
BOOK[14].echo=[{flag:'ines_space',text:'Inès commence par vous remercier du temps laissé. Vous lui dites que votre patience ne signifie pas que vous n’avez pas eu peur.'},{flag:'ines_call_demand',text:'Inès a lu votre demande d’appel immédiat. Elle comprend qu’il faudra parler de ce qu’elle vous a imposé.'},{flag:'family_photo',text:'Elle a imprimé la photo familiale que vous lui avez envoyée. Le papier dépasse de sa poche.'}];
BOOK[15].echo=[{flag:'sibling_team',text:'Inès vient avec vous et vous laisse poser vos propres questions.'},{flag:'ines_back',text:'Inès vous transmet les références avant le rendez-vous, puis reste volontairement en retrait.'},{flag:'ines_independent',text:'Nora vous accompagne après avoir fait vérifier séparément la version d’Inès.'}];
BOOK[17].echo=[{flag:'malik_exposed',text:'Malik se souvient que son nom a circulé avant son accord. Il souhaite que les documents soient examinés avant de répondre personnellement.'},{flag:'malik_consent',text:'Malik vous reconnaît le mérite d’avoir respecté les limites de sa première autorisation. Il accepte de reprendre les questions ensemble.'}];
BOOK[18].echo=[{flag:'local_backup',text:'La copie séparée préparée plus tôt permet de vérifier immédiatement les fichiers contestés.'},{flag:'archive_breach',text:'Élise vous répond désormais uniquement par la procédure formelle. Photographier la page protégée a laissé une limite dans votre relation.'}];
BOOK[19].echo=[{flag:'no_silence',text:'Aster sait déjà que vous refusez une contrepartie de silence. La discussion commence directement par cette clause.'},{flag:'deal_route',text:'Votre ouverture à une solution discrète vous vaut une proposition détaillée. Nora vous demande de ne pas confondre cette facilité d’accès avec une garantie.'}];
BOOK[20].echo=[{flag:'single_plot',text:'Bérénice vous demande de retirer les affirmations sur un plan unique que les pièces n’établissent pas. La discussion est plus longue que prévu.'}];
BOOK[22].echo=[{flag:'common_ground',text:'Le minimum commun défini plus tôt — explication et possibilité de recours — figure en tête de la réunion.'},{flag:'public_group',text:'Les personnes qui n’avaient pas rejoint votre action publique demandent à être distinguées de ses signataires.'}];
// Each chapter has its own pressure. Relaxed mode is available without resetting a run.
BOOK.forEach((c,i)=>{if(i>0&&i<21)c.budget=[70,80,85,75][i%4];c.places.forEach((l,li)=>l.actions.forEach((a,ai)=>{if(a.cost===15)a.cost=[15,20,25][(li+ai+i)%3]}))});

// Examining objects can supply the support for a later check.
BOOK[8].places[2].actions[2].support='ledger_detail';
BOOK[11].places[1].actions[1].needAlternative='deed_detail';
BOOK[17].places[0].actions[1].test=['technique',4];
BOOK[17].places[0].actions[1].support='map_detail';
BOOK[17].places[0].actions[1].success='Le détail du plan vous permet de poser la bonne question sur les deux alimentations. Daria confirme le lien avec le relevé.';
BOOK[17].places[0].actions[1].fail='Vous confondez deux circuits. Daria reprend le schéma et corrige votre note ; la question reste ouverte à une expertise, sans bloquer votre enquête.';
BOOK[17].places[0].actions[1].successEffect={flag:'technical_crosscheck',proof:1};
BOOK[17].places[0].actions[1].failEffect={flag:'technical_uncertain'};
