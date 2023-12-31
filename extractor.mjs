import pdfParse from 'pdf-parse';
import fs from 'fs';

const wyniki = fs.readFileSync('./wyniki.pdf')
const dataBuffer = await pdfParse(wyniki);
console.log(dataBuffer.text);

const data =
'1,64,MATUSZEWSKI,KAROL,KOSZALIN,Gwda Piła,1983,M,3:00.75\n' +
  '2,61,KOWALIK,DARIUSZ,WROCŁAW,-,1974,M,3:06.23\n' +
  '3,66,PIŃKOWSKI,JAROSŁAW,POKRZYWNICA,Gwda Piła,1978,M,3:08.59\n' +
  '4,100,JAROSZEWSKI,MAREK,PIŁA,4 Run Team Piła,1975,M,3:11.75\n' +
  '5,74,WÓJCIK,RAFAŁ,SZCZECIN,SKB DZIK/2bsap,1972,M,3:14.63\n' +
  '6,-,BARTOSZAK,MICHAŁ,-,-,1970,M,3:19.76\n' +
  '7,72,WAWRZYNKIEWICZ,JAROSŁAW,ŚREM,Runers Power Śrem,1978,M,3:27.37\n' +
  '8,55,GĄSIOREK,MARIUSZ,DOLASZEWO,Gwardia Piła,1977,M,3:30.87\n' +
  '9,-,HURUK,JAN,-,-,1960,M,3:32.64\n' +
  '10,65,MISIAK,TOMASZ,PIŁA,Gwardia Piła,1974,M,3:33.60\n' +
  '11,20,HASS,ARTUR,PIŁA,Gwardia Piła,1982,M,3:35.67\n' +
  '12,69,STRÓGAREK,WALDEMAR,UJŚCIE,Gwardia Piła,1971,M,3:38.25\n' +
  '13,53,CIEMIĘGA,MARCIN,PIŁA,-,1969,M,3:44.14\n' +
  '14,4,HASS,ANITA,PIŁA,Gwardia Piła,1981,K,3:54.53\n' +
  '15,47,CIEMIĘGA,EMILIA,PIŁA,-,1992,K,4:01.23\n' +
  '16,48,JAROSZEWSKA,JUSTYNA,WARSZAWA,Gwardia Piła,1978,K,4:01.52\n' +
  '17,46,BORÓWKO,KINGA,PIŁA,-,1983,K,4:01.53\n' +
  '18,71,TERESZCZUK,KAROL,PILA,-,1972,M,4:01.63\n' +
  '19,58,JAKUĆ,KRZYSZTOF,PIŁA,Gwardia Piła,1976,M,4:10.75\n' +
  '20,73,WISIŃSKI,SŁAWOMIR,RATAJE,Gwardia Piła,1977,M,4:13.90\n' +
  '21,70,SZAREJKO,JAROSŁAW,DOLASZEWO,Gwardia GWDA,1972,M,4:18.37\n' +
  '22,57,JACKOWIAK,JACEK,MIĘDZYRZECZ,Gwda Piła,1971,M,4:18.45\n' +
  '23,117,SKRZYPCZAK,ANNA,PIŁA,Gwardia Piła,1972,K,4:18.49\n' +
  '24,102,KARPIŃSKI,MAREK,PIŁA,Gwardia Piła,1972,M,4:19.93\n' +
  '25,104,WESTFAL,JACEK,TRZCIANKA,MKL Szczecin,1973,M,4:24.34\n' +
  '26,45,BONARSKA-PALACZ,DAGMARA,PIŁA,Gwda Piła,1981,K,4:31.89'

const czteryRazyCzterystaM =
  '1,STARSZAK I PRZYJACIELE,MARCIN,OSIEK NAD NOTECIĄ,Osiek nad Notecią,1982,4:04.35\n' +
  '2,HOFFMAN,PASZAL,PIŁA,GWDA Junior,2008,4:05.01\n' +
  '3,SZYMCZAK,JACEK,CZARNKÓW,KB Gmina Czarnków,1973,4:09.86\n' +
  '4,BAZIK,KAZEK,DOLASZEWO,Gwardia Piła,1971,4:26.56\n' +
  '5,SALWA,EWELINA,PIŁA,4 Run Team,Piła,2011,4:32.85\n' +
  '6,PIŃKOWSKI,JAROSŁAW,SZYDŁOWO,PLKS Gwda Piła,1978,4:35.64\n' +
  '7,BOIŃSKA,AGNIESZKA,PIŁA,WOLFTEAM,1978,5:17.10'

const tysiacK_Bieg_Brooksa =
  '1,50,SALWA,EWELINA,PIŁA,4 Run Team Piła,1983,3:29.00\n' +
  '2,3,GRABOWSKA,MARTYNA,DOLASZEWO,Gwardia,2008,3:29.04\n' +
  '3,8,MĄCZYŃSKA,EWA,PIŁA,-,1988,3:33.39\n' +
  '4,7,MAJKUT,ANNA,PIŁA,-,1988,3:37.31\n' +
  '5,107,ŁAWNICZAK,JUSTYNA,ZAKRZEWO,WOLF TEAM,1982,3:56.87\n' +
  '6,1,DŁUGA,MAGDALENA,ZLOTOW,Team TERMINATORun,1984,4:14.29\n' +
  '8,13,ZDEBIK,KATARZYNA,PIŁA,-,1989,4:14.32\n' +
  '9,51,STROMIDŁO,ANNA,PIŁA,Browar Domowy Hatak,1982,4:18.73\n' +
  '10,10,STRZELECKA,MAŁGORZATA,PIŁA,Sailing Team Ferajna,1972,4:19.28\n' +
  '11,9,PRZYSUSZYŃSKA,ANNA,POZNAŃ,-,2006,4:20.45'

const tysiacM_Bieg_Brooksa =
  '1,43,ZODROW,NORBERT,CHODZIEŻ,PCH_RUN,2001,2:46.86\n' +
  '2,15,FILIPIAK,JAKUB,OSIEK NAD NOTECIĄ,-,1992,2:56.46\n' +
  '3,37,STARSZAK,MARCIN,OSIEK NAD NOTECIĄ,Dębowa Góra,Run!,1982,3:01.22\n' +
  '4,42,WAWRZYNIAK,MATEUSZ,TRZCIANKA,Mg RUNNING TEAM,1997,3:01.43\n' +
  '5,67,SÓJKA,KAMIL,DACHOWA,Ratownicza Liga Biegowa,1989,3:04.87\n' +
  '6,23,JAWORSKI,MACIEJ,PIŁA,-,1981,3:10.75\n' +
  '7,36,SADŁOWSKI,OLIWIER,PIŁA,-,2006,3:11.94\n' +
  '8,25,KOBIERSKI,SZYMON,CHODZIEŻ,PCH_RUN,1989,3:14.35\n' +
  '9,32,MĄCZYŃSKI,DOMINIK,PIŁA,-,1984,3:20.89\n' +
  '10,109,SIKORSKI,PIOTR,PIŁA,4 Run Team Piła,1981,3:23.70\n' +
  '11,112,PABICH,KRZYSZTOF,PIŁA,4 Run Team Piła,1972,3:33.20\n' +
  '12,24,KAMIŃSKI,KACPER,LIPIA GÓRA,-,1996,3:35.65\n' +
  '13,14,DEMBIŃSKI,MACIEJ,UJŚCIE,Team Ujście,1978,3:37.79\n' +
  '14,72,WAWRZYNKIEWICZ,JAROSŁAW,ŚREM,Runers Power Śrem,1978,3:38.91\n' +
  '15,38,STARSZAK,KAMIL,OSIEK NAD NOTECIĄ,Gepardy z Krajny,2002,3:39.53\n' +
  '16,68,STROMIDŁO,SEBASTIAN,PIŁA,BR W stronę Ultra - podcast,1978,3:39.66\n' +
  '17,41,WALCZAK,MACIEJ,PIŁA,-,1993,3:40.10\n' +
  '18,101,KISTOWSKI,BARTŁOMIEJ,GLESNO,Watacha,1997,3:40.62\n' +
  '19,33,MELON,JACEK,JASTROWIE,Biegam,1976,3:44.70\n' +
  '20,22,HRYNCEWICZ,SZYMON,PIŁA,-,2008,3:46.39\n' +
  '21,26,KRAKOWSKI,KRZYSZTOF,PIŁA,-,1981,3:46.57\n' +
  '22,21,HRYNCEWICZ,JAROSŁAW,PIŁA,4 Run Team Piła,1976,3:51.21\n' +
  '23,18,GŁADYSZ,WOJCIECH,PIŁA,-,1982,3:52.16\n' +
  '24,60,KŁACZYŃSKI,MARIUSZ,PIŁA,Parkrun Grudziądz,1979,3:52.94\n' +
  '25,40,SZYMCZAK,JACK,ŚMIESZKOWO,KB Gmina Czarnków,1973,3:54.30\n' +
  '26,27,KRALSKI,KRZYSZTOF,PIŁA,-,1987,3:54.65\n' +
  '27,34,PALACZ,JAKUB,PIŁA,-,1979,4:07.59\n' +
  '28,29,KUŻAJ,SŁAWOMIR,PIŁA,Sailing Team Ferajna,1965,4:09.07\n' +
  '29,30,LAJTER,JERZY,PIŁA,4 Run Team Piła,1950,4:11.28\n' +
  '30,44,NOWAK,BARTEK,PIŁA,Sailing Team Ferajna,1974,4:18.31\n' +
  '31,28,KUNYSZ,MIECZYSŁAW,PIŁA,Biegacz,1946,4:25.47'

const czterystaM =
  '1,103,BARANOWSKI,KAROL,PIŁA,KP PIŁA,2008,1:05.37\n' +
  '2,99,OLECHNOWICZ,MICHAŁ,PIŁA,KP PIŁA,2010,1:06.71\n' +
  '3,76,CARDENAS,RAFAEL,WARSZAWA,N/A,2010,1:07.86\n' +
  '4,82,PIEKARSKI,PIOTR,PIŁA,2013,1:22.54\n' +
  '5,105,KORDY,KACPER,DZIEMBOWO,LZS DZIEMBOWO,2012,1:23.00\n' +
  '6,111,KOZŁOWSKI,ALEKSANDER,PIŁA,PIŁA,2012,1:27.84\n' +
  '7,77,CIEMIĘGA,JAN,PIŁA,-,2013,1:28.54\n' +
  '8,78,CZERWIŃSKI,OLIWIER,OBORNIKI,-,2015,1:37.49\n' +
  '9,106,DERESZ,JAKUB,DZIEMBOWO,LZS DZIEMBOWO,2010,1:45.52\n' +
  '10,79,FRACKOWIAK,ANTONI,CZARNKOW,Kama Run,2016,1:50.80\n' +
  '11,84,ŚMIGIEL,MARCEL,PIŁA,-,2014,1:51.95'

const czterystaK =
  '1,87,CHWIESIUKOWICZ,ANTONINA,PIŁA,Gwardia Piła,2010,1:05.87\n' +
  '2,94,MARTAU,JULIA,KOSZALIN,KS WILKI Pomorskie,2009,1:07.31\n' +
  '3,90,HASS,MAŁGORZATA,PIŁA,Gwardia Piła,2010,1:11.13\n' +
  '4,113,ALICHNIEWICZ,NATALIA,PIŁA,-,2011,1:16.82\n' +
  '5,86,CARDENAS,MAJA,WARSZAWA,N/A,2012,1:16.97\n' +
  '6,97,URBANIAK,JULIA,PIŁA,-,2010,1:20.65\n' +
  '7,98,ŻUKOWSKA,MARYSIA,PIŁA,-,2010,1:24.64\n' +
  '8,114,KOZŁOWSKA,OLIWIA,PIŁA,-,2011,1:25.43\n' +
  '9,88,GORGOL,MARTYNA,PIŁA,-,2009,1:32.49\n' +
  '10,93,MANKIEWICZ,IGA,PIŁA,-,2015,1:37.32\n' +
  '11,89,HAMERA,DOMINIKA,PIŁA,-,2013,1:37.37\n' +
  '12,92,KOSTKOWSKA,ZOSIA,OSTROWIEC ŚWIĘTOKRZYSKI,-,2008,1:39.21\n' +
  '13,96,PALACZ,GABRIELA,PIŁA,-,2015,1:48.93\n' +
  '14,108,ROMANOWSKA,JULIA,PIŁA,-,2017,1:52.39\n' +
  '15,95,MŁYNARCZAK,ALICJA,SZCZECIN,-,2016,2:01.28'

const disabled = [
  ['Jan', 'Zajac']
  ['Jan', 'Kowalski'],
  ['Jan', 'Nowak'],
  ]

const ary = data.split('\n')
for (let el of ary) {
  el = el.split(',')
  console.log(el)
}

