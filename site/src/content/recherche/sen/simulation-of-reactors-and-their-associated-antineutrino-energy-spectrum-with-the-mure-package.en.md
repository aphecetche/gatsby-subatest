---
title: "Reactor simulation"
date: "2012-08-23 15:13:03 +0000 UTC"
lastmod: "2015-09-21 07:37:54 +0000 UTC"
path: "recherche/sen/simulation-of-reactors-and-their-associated-antineutrino-energy-spectrum-with-the-mure-package.en.md"
joomlaid: 253
category: "sen"
asides: ["sen.+menu+"]
layout: "recherche"
---
Simulation of reactors and their associated antineutrino energy spectrum with the MURE package
==============================================================================================

The measurement of reactor thermal power through antineutrinos would provide a global value common to all reactor type, which would not suffer of the uncertainty due to inhomogeneities typical of traditional heat measurements, and with an error comparable to this method. In addition, recently, the proliferating nature of nuclear energy has become a key point for the future development of this kind of energy. Fundamental research can contribute to explore a way to monitor nuclear reactor through antineutrino detection. The Subatech team was very quickly involved in this area, which needs accurate reactor core simulations.

Problematics
============

Nuclear power plants constantly emit an intense flux of antineutrinos (1021 / s for 1GWe). Their energy spectrum and flux depend on the composition of nuclear fuel and reactor thermal power. These properties lead to potential applications of neutrino physics: they could be used to non-intrusively monitoring of nuclear reactors. For these purposes, a better understanding of the energy spectrum of antineutrinos from the fission of uranium and plutonium isotopes is needed. Simulation tools, mainly based on MURE code \[1\], have been developed for this purpose. These generic tools, presented below, allow to perform scenario studies on the feasibility of using antineutrino for measuring reactor thermal power and to check the accuracy we can reach in determine the composition of reactor core through antineutrino detection. Moreover MURE, adapted to simulate reactor antineutrino spectra, will be used to accurately simulate the N4 PWR of CHOOZ power plant, needed to normalize the first phase of the [Double-Chooz](/recherche/sen/double-chooz-experiment.en) [experiment](/recherche/sen/double-chooz-experiment.en) \[2\]. The idea that neutrinos could also be used for applications related to nuclear power plants borned in the 70s \[3\]. Indeed, the antineutrinos emitted by reactor cores comes mainly from the fission of uranium and plutonium isotopes (235U, 239Pu, 241Pu, 238U). The following table shows the energy characteristics of the fission of the 4 nuclei.

235U

239Pu

238U

241Pu

Ef (MeV)

201.7

210.0

205.0

212.4

n > (MeV)

1.46

1.32

1.56

1.44

n>

(E>1.8MeV)

5.58

(1.92)

5.09

(2.38)

6.69

(1.45)

5.89

(1.83)

Fission products are neutron-rich nuclei and radioactive. During their beta decay, they emit an electron antineutrino. Then the energy spectrum of antineutrinos emitted from reactor reflects the conposition of fission products. The consequence is that the energy spectrum of antineutrinos also reflects the composition of the fuel. Changes in the antineutrino energy spectrum as a function of irradiation rate as well as the correlation between the antineutrino flux and thermal power of a reactor have already been demonstrated experimentally. Thanks to their low cross section, the antineutrinos escape without interacting and can give a global picture of a reactor core and the generated power. In addition, they can not be stopped by any shielding and may therefore be a useful tool to fight against the proliferation of nuclear weapons for the International Atomic Energy Agency (IAEA). The agency has asked its member states to carry out a sensitivity analysis. The low amplitude of the measured signal requires careful study.

These potential applications of neutrinos interested Double-Chooz collaboration. Double Chooz experiment is designed to better constrain the neutrino mixing angle θ13, installing two identical detectors near the Chooz power plant in the Ardennes ([Double Chooz](http://doublechooz.in2p3.fr/Public/English/welcome.php)). The near detector will be located at 400m and the far one is located at 1050m from reactor cores. Antineutrinos are detected via inverse beta reaction: \\(\\bar{\\nu}\_e+p \\rightarrow e^++n\\) (threshold 1.8MeV). The measurement of the energy spectrum of antineutrinos emitted by the reactors performed by the near detector of Double Chooz will be the most accurate ever realized and will allow to test the limits of the antineutrinos monitoring method by comparing the results of simulations to really. In this context, the ERDRE group works primarily in 3 areas: a better determination of the energy spectrum of antineutrinos emitted by nuclear reactors (simulations: see below, nuclear physics measurements: [](/recherche/sen/measurement-of-beta-decay-properties-of-fission-products.en)[TAGS experiment](/recherche/sen/measurement-of-beta-decay-properties-of-fission-products.en)), a detailed simulation of the core of Chooz reactors for neutrino physics ([Double](/recherche/sen/double-chooz-experiment.en) [Chooz](/recherche/sen/double-chooz-experiment.en)) and studies of proliferant scenarios with antineutrinos (see below). 

Simulation of energy spetrum of anineutrino from nuclear reactors
=================================================================

  In the context of the "Reactor antineutrino energy spectrum and simulations" working group of the Double Chooz Collaboration, we have developed some tools that now allow to perform detailed simulations of the energy spectrum of antineutrinos reactors, using a reactor simulation and evaluated nuclear databases for beta decay properties of fission products \[1\] \[2\]. For this, we use the set of routines, written in C++, MCNP Utility for Reactor Evolution (MURE) \[3\], originally developed by the IPN of Orsay and the LPSC of Grenoble for future reactors (Gen IV). MURE is an interface to the Monte Carlo transport code MCNP that allow to calculate the temporal evolution of inventories, to couple neutronic calculations with simple thermohydraulic calculations, etc ...MURE is reactor simulation tool that allows to calculate fuel inventory over time taking into account the neutronics conditions of the core. Then the energy spectrum of antineutrinos produced by the reactor is constructed by weighting the rate of production of fission product production by their beta decay probability and using a database that select the antineutrino energy spectra of fission products from multiple nuclear databases (JEFF, JENDL, ENSDF, data ... TAGS). This approach also allows the calculation and propagation of errors and their correlations affecting the energy spectrum of reactor antineutrinos (see [thesis of T. Mueller,](http://irfu.cea.fr/Phocea/file.php?class=std&&file=Doc/Publications/Archives/irfu-10-05-T.pdf) CEA / IRFU / SPhN).Recently we have re-calculated the spectra of antineutrinos from the 4 major contributors to fission in a reactor core of PWR type, 235U, 239Pu, 238U and 241Pu, using the spectra formulation presented in \[4\] and including the last measurements performed using the TAGS method \[5\] that correct some nuclei affected by Pandemonium effect. We find that these few nuclei have a significant impact on the antineutrino spectra, reinforcing the motivation for the foreseen new measures with TAGS thecnique \[6\] proposed by our group in collaboration with the team of IFIC Valencia ([TAGS](/recherche/sen/measurement-of-beta-decay-properties-of-fission-products.en)). Our publication is available on the link \[7\].In the context of the potential use of antineutrinos to measure the thermal power of nuclear reactors or fight against the proliferation of nuclear weapons, the team developed simulations of PWR and CANDU with code MURE and in collaboration with a team of IPN Orsay and a team of LPSC Grenoble . These simulations are used both to calculate the energy spectrum of antineutrinos emitted by the Chooz plant for the [Double](/recherche/sen/double-chooz-experiment.en) [Chooz](/recherche/sen/double-chooz-experiment.en) experiment (see [Anthony Onillon thesis](/recherche/sen/thesis.en) \[8\]), but also to conduct research on proliferation scenarios and explore the potentiality of antineutrinos in this context.

Proliferant scenario studies
============================

 To study the sensitivity of this new probe it is necessary to characterize the emission of antineutrinos from the main present and future reactors. The group develops core simulations of different reactor types to study the associated proliferant scenarios, taking into account the constraints from reactor physics and neutronics. These simulations are currently unique worldwide, although other groups are developing tools to make similar studies. These studies are essential because they help to establish performance requirements for future antineutrino detectors dedicated to non-proliferation. The objective is to establish a roadmap for the IAEA containing the performance of the antineutrino probe associated with major reactor designs. This is also the objective of the Sub-Working Group of the European Society ESARDA \[9\] dedicated to the antineutrino probe. The IAEA has also created an Ad-Hoc working group dedicated to the detection of antineutrinos from reactors on the occasion of the IAEA Symposium in October 2010. \[10\] These studies of proliferant scenarios are part of thesis work of [Van Minh Bui](/recherche/sen/thesis.en) (CANDU) \[11\] and [Sandrine](/recherche/sen/thesis.en) [Cormon](/recherche/sen/thesis.en) (CANDU VHTR, SFR) \[12\]. This work were presented at the ESARDA metings, at the IAEA Symposium, at the first meeting of the Ad-Hoc Working Group of the IAEA and at a dedicated meeting dedicated the last INMM conference \[13\].

Link with Nucifer Experiment
============================

A simulation of OSIRIS research reactor in Saclay has been developed in SUBATECH in the context of the [Nucifer experiment](/recherche/sen/nucifer-experiment.en) ([V.M. Bui](/recherche/sen/thesis.en) thesis \[11\], and V. Communeau internship \[15\]). Nucifer is a reactor antineutrino detector, built by CEA DSM / IRFU / SPP, DSM / IRFU / SPhN, DAM and SUBATECH, dedicated to reactor  monitoring. The simulation of the OSIRIS reactor power and its history during data taking will be compared to measurements performed by Nucifer in 2012-2013. This comparison will be used to estimate the precision achievable in measuring fuel composition through antineutrinos detection . This experience also provides an additional opportunity to test the performance of our simulations with MURE, since we also simulate the gamma and neutron background induced by the reactor core at Nucifer location (7m from the core). This simulation allowed also to study the antineutrino flux emitted by the OSIRIS reactor core, according to the different operation conditions. An article gathering this simulation workon the antineutrinos flux and on the gamma and neutron background is being finalised for a submission before the end 2015 \[17\].

Link with Solid Experiment
==========================

A simulation of the BR2 research reactor (SCK-CEN) is under development with the MURE code within the SoLiD experiment (Search for Neutrino Oscillation with Lithium-6 Detector) aiming at searching for active-to-sterile antineutrino oscillation at very short baseline to test the existence of sterile neutrinos. Beyond the researches for sterile neutrinos, this detector could be used for the monitoring of nuclear power plants for non proliferation purpose. SUBATECH is co-responsible with the SCK-CEN reactor team of the Working Group: Antineutrino Spectrum and Reactor Simulation. The current strategy is to combine the work already performed on the BR2 reactor simulation by the SCK-CEN team with the developments made par le groupe de SUBATECH with the MURE code for reactor antineutrino experiments Double Chooz, Nucifer). As a first step, a depletion benchmark was performed between the MURE code and MCNPX coupled to CINDER90 for a single fuel element in an infinite lattice. Currently, the first core simulations performed with the MURE code are under tests \[17\].

[Link with the industrial chair DAHER](//www.mines-nantes.fr/en/Entreprise/Nos-chaires/2-Chaire-Modelisation-multi-physique-des-couplages-mecaniques-thermiques-et-irradiation-dans-les-materiaux) \[18\]
=========================================================================================================================================================================================================

The maintenance of nuclear reactors, ageing due to irradiation of systems and reactor components are important issues for the nuclear industry and it becomes crucial to determine accurately metal damages due to irradiation. Moreover, the projects of storage and long-term disposal facilities of used fuels or wastes from the nuclear deconstruction require to check the integrity over the time of the containers. The nember of Dispacement Per Atom (DPA) is generally used to estimate the damage produced by various types of radiation. Within the framework of an industrial chair with the DAHER company, the SUBATECH group developed tools in order to calculate DPAs with the Monta Carlo code MURE.

Reactor decay heat
==================

The decay heat is produced by the beta and gamma decays of the fission products. It represents approximately 7%!o(MISSING)f reactor nominal power and it is still produced after the reactor stop. Its estimate constitues an important issue for reactor safety. In particular, it is a key parameter for designof Gen IV reactors and the use of innovative fuels. In complement of the experimental work performed in the group on the measurement of the beta decay properties of the fission products with the [TAS technique](/recherche/sen/measurement-of-beta-decay-properties-of-fission-products.en), we started to develop decay heat simulations with the MURE code in 2015. The objective is to calculate the contributions of β\- and γ decays to the residual power. This activity is in synergy with the simulation work already done in the group with the MURE code on reactor simulation and β\- spectra calculation with the summation method. A similar work has to be done on the γ spectra. The first task is to develop a dedicated class in MURE and to benchmark thermal/fast fission pulse calculations with experimental data. The outlooks are to work on decay heat calculation and associated uncertainties for different Gen IV type reactors.

### Bibliography

\[1\] Th. A. Mueller, D. Lhuillier, M. Fallot, A. Letourneau, S. Cormon, M. Fechner, L. Giot, T. Lasserre, J. Martino, G. Mention, A. Porta and F. Yermia, Improved Predictions of Reactor Antineutrino Spectra. Phys.Rev. C 83, (2011) 054615.

\[2\] Voir les proceedings de conference suivants : AAP, Applied Antineutrino Physics workshop, 2007, Paris, [](http://www.apc.univ-paris7.fr/AAP2007/schedule.phtml)[http://www.apc.univ-paris7.fr/AAP2007/schedule.phtml](http://www.apc.univ-paris7.fr/AAP2007/schedule.phtml) ; Nuclear Reactor Simulations for Unveiling Diversion Scenarios : capabilities of the antineutrino probe, M. Fallot, V.M. Bui et al., GLOBAL 2009 Proceedings Paris, Sept. 2000 ; Towards reactor neutrino applied physics, M. Fallot, S. Cormon, M. Cribier, L. Giot, B. Guillon, T. Lasserre, A. Letourneau, D. Lhuillier et J.   Martino, International Conference on Nuclear Data for Science and Technology, ND 2007 Proceedings, Nice, France ; Non proliferation studies with the Double Chooz detector, S. Cormon, M. Cribier, M. Fallot, T. Lasserre, A. Letourneau, D. Lhuillier et J. Martino XXII International Conference on Neutrino Physics and Astrophysics Neutrino 2006 proceedings, Santa Fe, New Mexico (USA).

\[3\] MURE : MCNP Utility for Reactor Evolution. O. Meplan et al., Proceedings of the ENC 2005 (CD-Rom). [](http://www.nea.fr/tools/)[http://www.nea.fr/tools/](http://www.nea.fr/tools/) abstract/detail/nea-1845. O. Meplan, Tech. Rep. LPSC 0912 and IPNO-09-01 (2009). 

\[4\] P. Huber, Phys. Rev. C84, 024617 (2011).

\[5\] A. Algora et al., Phys. Rev. Lett. 105, 202501 (2010).

\[6\]  Proposal to the PAC of the JYFL Accelerator Laboratory ”Study of nuclei relevant for precise predictions of reactor neutrino spectra”, spokespersons : M. Fallot, A.Algora, J.L. Tain;

\[7\]  M. Fallot, S. Cormon, M. Estienne, A. Algora, V.M. Bui, A. Cucoanes, M. Elnimr, L. Giot, D. Jordan, J. Martino, A. Onillon, A. Porta, G. Pronost, A. Remoto, J. L. Taín, F. Yermia, A.-A. Zakari-Issoufou, New antineutrino energy spectra predictions from the summation of beta decay branches of the fission products, Phys. Rev. Lett. 109 (2012). [http://arxiv.org/abs/1208.3877.](http://arxiv.org/abs/1208.3877.)

\[8\] Anthony Onillon's PhD thesis, University of Nantes, 2013.

\[9\] European Safeguards Research and Development Association, [](http://esarda2.jrc.it/about/index.html)[http://esarda2.jrc.it/about/index.html](http://esarda2.jrc.it/about/index.html) ; ESARDA NA/NT: [](http://esarda2.jrc.it/internal_activities/WG-NT-NA/index.html)[http://esarda2.jrc.it/internal\_activities/WG-NT-NA/index.html](http://esarda2.jrc.it/internal_activities/WG-NT-NA/index.html)

\[10\] Proceedings of the first meeting of the Ad Hoc Working Group on Safeguards Applications utilizingAntineutrino Detection and Monitoring, IAEA Report SG-EQGNRL-RP-0002. IAEA Report « Final Report of the Focused Workshop on Antineutrino Detection for Safeguards Applications », STR-361, Department of Safeguards.

\[11\] Van Minh Bui's PhD thesis, Oct. 2012, University of Nantes.

\[12\] Sandrine Cormon's PhD thesis, Dec. 2012, University of Nantes.

\[13\] Estimated sensitivity of the antineutrino probe for future reactor monitoring, INMM 53rd Annual Meeting, July 2012, Orlando Florida. See also the following proceedings:Towards reactor monitoring with antineutrinos, Global 2007: Advanced Nuclear Fuel Cycles and Systems. B. Guillon, S. Cormon, M. Cribier, M. Fallot, L. Giot, T. Lasserre, A. Letourneau, D. Lhuillier et J. Martino, Global 2007 Proceedings, Boise, Idaho, USA ; Monte Carlo simulations in the context of reactor monitoring with antineutrinos, L. Giot, M. Fallot, B. Guillon, J. Martino for the Double Chooz collaboration ; Nuclear Reactor Simulations for Unveiling Diversion Scenarios : capabilities of the antineutrino probe, M. Fallot, V.M. Bui et al., GLOBAL 2009 Proceedings Paris, Sept. 2009 ; Proceedings of the International Congress on Advances in Nuclear Power Plants (ICAPP '10), June 2010, San Diego (California), V.M. Bui, M. Fallot, L. Giot, J. Martino, A.Porta, F. Yermia : Simulation of 235U and 239Pu decay heat using selected beta decay data in the framework of reactor antineutrino experiments ; Nuclear Reactor Simulations for Unveiling Diversion Scenarios: Capabilities of the Antineutrino Probe Applied to VHTR Monitoring, S. Cormon, M. Fallot, V.M. Bui, L. Giot, A Onillon, A. Porta, F. Yermia, proceedings of the Int. Conf. ICAPP 2011, 11198, (2011) Nice, France.

\[14\] Voir les proceedings suivants : The Nucifer experiment, A. Cucoanes on behalf of the Nucifer Collab. Int. Conf. TAUP 2011 proceedings ; Proceedings of the International Conference TAUP, July 2009, A. Porta et al. (Nucifer collab.), à paraître dans le journal IEEE. ; Proceedings of the International Conference ANIMMA, June 2009, A. Porta et al. (Nucifer collab.), accepté pour publication dans IEEE Transactions on Nuclear Science (TNS) ; The Nucifer experiment : antineutrino detection for reactor monitoringF. Yermia, S. Bouvier, V.M. Bui, et al. GLOBAL 2009 Proceedings Paris, Sept. 2009. ; Reactor antineutrino detection for thermal power measurement and non-proliferation purposes A. Porta, A. Letourneau, D. Lhuillier, T. Mueller, for the Nucifer collaboration, Proceedings of the PHYSOR 2008 conference : «  Nuclear Power, a sustainable resource ».

\[15\] Stage de M1 de Vincent Communeau, Paris-Tech, 2012.

\[16\] Antineutrino emission and gamma background characteristics from a thermal research reactor, V.M. Bui, L. Giot, M. Fallot et al., in preparation for a submission to PRD.

\[17\] BR2 reactor coupled MCNPX and MURE simulations for the SoLid experiment, L. Giot, M. Fallot, S. Kalcheva, E. Koonen, Proceeding for the RRFM 2015 conference (European Research Reactor Conference), April 2015.

\[18\] New MURE developments for the calculation of Displacement Per Atoms, L. Giot, A. Onillon, M. Fallot et al., Rapport d’activité SUBATECH 2014.
