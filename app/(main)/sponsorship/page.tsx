"use client";
import React from "react";
import Button from "@/components/Common/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
const SponsorshipPage: React.FC = () => {
    const router = useRouter();

    const handleSponsorClick = () => {
        router.push("/sponsor");
    };

    return (
        <div className="py-20 px-6">
            <div className="flex flex-row justify-between pt-8">
                <h1 className="text-2xl font-bold mb-4">Sponsor NESA-Africa 2025</h1>

            <Button text="Sponsor" variant="filled" className="mr-8" onClick={handleSponsorClick} />
        </div>
        <p>
            <>
                <h2 className="text-lg font-semibold mb-2">Position Your Brand at the Forefront of Educational Impact Across Africa</h2>
                <p className="mb-4">
                    Welcome to the sponsorship gateway of the New Education Standard Award – Africa (NESA-Africa) 2025, a continental movement recognizing excellence, innovation, and commitment to education. We invite visionary brands, CSR leaders, media platforms, NGOs, governments, diaspora networks, and philanthropists to partner with us across multiple high-impact sponsorship areas.
                </p>
                <h3 className="text-md font-semibold mt-6 mb-2">🌟 Why Sponsor NESA-Africa 2025?</h3>
                <ul className="list-disc ml-6 mb-4">
                    <li>Be recognized as a champion of African education reform</li>
                    <li>Directly support grassroots education initiatives</li>
                    <li>Reach 10+ million digital viewers across Africa and diaspora</li>
                    <li>Receive global recognition via NESA TV &amp; “It’s In Me” Radio</li>
                    <li>Drive visibility through ambassadors, influencers, and media platforms</li>
                    <li>Fund scholarships, educational access, and advocacy through EduAid-Africa</li>
                </ul>

                <h3 className="text-md font-semibold mt-6 mb-2">🏆 Sponsorship Areas</h3>
                <ol className="list-decimal ml-6 mb-4 space-y-4">
                    <li>
                        <strong>Award Categories – Competitive (8 Total)</strong>
                        <ul className="list-disc ml-6 mb-2">
                            <li>Includes public nominations, voting, and expert judging.</li>
                            <li>Each main category includes sub-categories ranging from 4 to 27.</li>
                        </ul>
                        <div className="mb-2">
                            <span className="font-semibold">🏷 Pricing Based on Number of Sub-Categories</span>
                            <ul className="list-disc ml-6">
                                <li>1–4 sub-categories → <span className="font-semibold">$2,000</span> per sub</li>
                                <li>5–9 sub-categories → <span className="font-semibold">$1,700</span> per sub</li>
                                <li>10+ sub-categories → <span className="font-semibold">$1,500</span> per sub</li>
                            </ul>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">🟨 Main Categories Include:</span>
                            <ul className="list-disc ml-6">
                                <li>Best Media Organization in Educational Advocacy (Nigeria)</li>
                                <li>Best CSR in Education (Nigeria – 27 sub-categories)</li>
                                <li>Best CSR in Education (Africa – 17 sub-categories)</li>
                                <li>Best NGO in Nigeria / Africa</li>
                                <li>Best STEM Education Program (Africa)</li>
                                <li>Best EduTech Organization (Africa-wide)</li>
                                <li>Creative Arts Industry Contribution (Nigeria)</li>
                                <li>Social Media Influencer in Educational Advocacy</li>
                            </ul>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">📍Sponsor a Competitive Award Category</span>
                            <div>
                                <a href="/sponsor" className="text-blue-600 underline">➡️ Click here to sponsor</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <strong>Award Categories – Non-Competitive (9 Total)</strong>
                        <ul className="list-disc ml-6 mb-2">
                            <li>Panel-selected recognition categories with no public nomination. These celebrate institutions, leaders, and diaspora networks.</li>
                        </ul>
                        <div className="mb-2">
                            <span className="font-semibold">💰 Flat Sponsorship Rate per Category: $2,000 – $3,500</span>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">🎖 Winners receive certificates of recognition (not plaques)</span>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">🟩 Categories Include:</span>
                            <ul className="list-disc ml-6">
                                <li>Africa Lifetime Education Icon</li>
                                <li>Political Support in Education (Ministers, Governors)</li>
                                <li>Diaspora Contributions to Education</li>
                                <li>Best Research &amp; Library Institutions</li>
                                <li>Faith-Based &amp; Political Leadership in Education</li>
                            </ul>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">📍Sponsor a Non-Competitive Recognition Category</span>
                            <div>
                                <a href="/sponsor" className="text-blue-600 underline">➡️ Click here to sponsor</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <strong>📺 NESA TV &amp; “It’s In Me” Radio Sponsorship</strong>
                        <p>Reach pan-African youth and educators through our award-winning media platforms.</p>
                        <div className="mb-2">
                            <span className="font-semibold">🎙 Opportunities Include:</span>
                            <ul className="list-disc ml-6">
                                <li>Full Season Sponsor (10 Episodes) – <span className="font-semibold">$8,000</span></li>
                                <li>Single Episode Sponsor – <span className="font-semibold">$1,000</span></li>
                                <li>Studio Branding, Promo Clips, and Ad Placement Included</li>
                            </ul>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">📍Sponsor NESA Media Platforms</span>
                            <div>
                                <a href="/sponsor" className="text-blue-600 underline">➡️ Click here to sponsor</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <strong>🌍 Regional Awards Sponsorship</strong>
                        <p>Sponsor NESA recognition across Africa’s regions: West, East, Central, Southern, and North Africa</p>
                        <div className="mb-2">
                            <span className="font-semibold">💰 Flat Rate per Region: $5,000</span>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">🎖 Includes branding, nominee support, and digital visibility</span>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">📍Sponsor a Regional Award Group</span>
                            <div>
                                <a href="/sponsor" className="text-blue-600 underline">➡️ Click here to sponsor</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <strong>🎓 EduAid-Africa Expo Sponsorship (October 16, 2025)</strong>
                        <p>Align with Africa’s largest education innovation &amp; scholarship fair.</p>
                        <div className="mb-2">
                            <span className="font-semibold">💰 Packages: $2,500 – $7,000</span>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">🎁 Sponsor booths, ambassador branding, student showcases, and startup demos</span>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">📍Sponsor EduAid Expo</span>
                            <div>
                                <a href="/sponsor" className="text-blue-600 underline">➡️ Click here to sponsor</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <strong>🎉 Gala &amp; Event Sponsorship Packages</strong>
                        <p>Be part of the October Celebration Week in Abuja, Nigeria.</p>
                        <div className="mb-2">
                            <span className="font-semibold">🗓 October 13–15</span>
                            <ul className="list-disc ml-6">
                                <li>Pre-Award Conference: Policy Panels | Diaspora Talks | EduTourism</li>
                                <li>Sponsor Panel Tracks – <span className="font-semibold">$3,000</span></li>
                                <li>Sponsor a Day – <span className="font-semibold">$7,000</span></li>
                            </ul>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">🗓 October 17</span>
                            <ul className="list-disc ml-6">
                                <li>Gala Awards Night</li>
                                <li>Sponsorship: <span className="font-semibold">$10,000 – $25,000</span></li>
                                <li>Co-hosting rights, red carpet branding, on-stage mentions</li>
                            </ul>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">📍Sponsor the Awards Gala or Pre-Award Events</span>
                            <div>
                                <a href="/sponsor" className="text-blue-600 underline">➡️ Click here to sponsor</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <strong>💼 Total Program Sponsorship</strong>
                        <p>Take the lead as the Presenting Sponsor for the entire NESA-Africa 2025 program, including the Expo, TV, Awards, and Scholarships.</p>
                        <div className="mb-2">
                            <span className="font-semibold">💰 Total Package: $50,000</span>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">🎁 Lifetime badge recognition, exclusive panels, award presentation rights</span>
                        </div>
                        <div className="mb-2">
                            <a href="/sponsor" className="text-blue-600 underline">➡️ Become a Presenting Sponsor</a>
                        </div>
                    </li>
                </ol>

                <h3 className="text-md font-semibold mt-6 mb-2">💳 Payment &amp; Bonus</h3>
                <div className="mb-2">
                    <span className="font-semibold">💰 All Payments Can Be Made:</span>
                    <ul className="list-disc ml-6">
                        <li>Directly via GFA Wallet (all currencies accepted, converted to USD)</li>
                        <li>Bank Transfer to NESA-Africa Account</li>
                        <li>Via Paystack, Fairsure, Bancable, Zelle, TapTap Send</li>
                    </ul>
                </div>
                <div className="mb-2">
                    <span className="font-semibold">🎁 For Every Sponsorship, you receive:</span>
                    <ul className="list-disc ml-6">
                        <li>Afri-Gold Coin Bonus (for voting or gifting)</li>
                        <li>Custom digital badges</li>
                        <li>Certificates of Partnership</li>
                    </ul>
                </div>
                <div className="my-10 bg-primaryGold p-6 rounded-lg">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            🏆 Award Category Sponsorships
                        </h2>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                                🔹 Competitive Award Categories
                            </h3>
                            <p className="text-sm mb-2">
                                <span className="font-medium">Sponsorship includes:</span> category, subcategory, voting rights branding, plaques &amp; Afri-Gold Coin benefits
                            </p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Best Media Organization in Educational Advocacy (Nigeria)</li>
                                <li>
                                    Best Corporate Social Responsibility (CSR) in Education – Nigeria
                                    <ul className="list-disc ml-6">
                                        <li>✅ 27 subcategories</li>
                                    </ul>
                                </li>
                                <li>
                                    Best CSR in Education – Africa (Regional)
                                    <ul className="list-disc ml-6">
                                        <li>✅ 17 subcategories</li>
                                    </ul>
                                </li>
                                <li>Social Media Influencer in Education Advocacy &amp; CSR</li>
                                <li>Best NGO Supporting Education in Nigeria</li>
                                <li>Best NGO Supporting Education in Africa</li>
                                <li>Creative Arts Industry Contribution to Education</li>
                                <li>Best EduTech Organization in Africa</li>
                                <li>Best STEM Education Program/Project in Africa</li>
                            </ul>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                                🟢 Non-Competitive Recognition Categories
                            </h3>
                            <p className="text-sm mb-2">
                                <span className="font-medium">Sponsorship includes:</span> digital certificates, mention during awards, press features
                            </p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Africa Lifetime Education Icon Award</li>
                                <li>Political Support for Education (Governors/Ministers)</li>
                                <li>Diaspora Association Educational Impact Award</li>
                                <li>Overall Best CSR in Education in Nigeria</li>
                                <li>Diaspora Contributions to Education (Individuals/Organizations)</li>
                                <li>Best Educational-Friendly State (Nigeria)</li>
                                <li>Best Tertiary Library in Nigeria</li>
                                <li>Best Research &amp; Development Institution (Nigeria)</li>
                                <li>Faith-Based &amp; Political Leadership Awards</li>
                                <li>Christian Education Champions</li>
                                <li>Islamic Education Champions</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
                            📺 Media &amp; Broadcast Sponsorships
                        </h2>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>NESA TV Full Season (10 Episodes)</li>
                            <li>Single NESA TV Episode</li>
                            <li>It’s In Me Radio Show Segment</li>
                            <li>TikTok Campaign Sponsorship</li>
                            <li>Studio Branding (Lagos/NESA Studio)</li>
                            <li>Media Content Partner for EdTech &amp; CSR Features</li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
                            🌍 Regional &amp; Country Sponsorships
                        </h2>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>West Africa Regional Sponsor</li>
                            <li>East Africa Regional Sponsor</li>
                            <li>Southern Africa Regional Sponsor</li>
                            <li>North Africa Regional Sponsor</li>
                            <li>Sponsor Nominee Participation from a Specific Country</li>
                            <li>Sponsor NESA in Your State (e.g., NESA in Lagos, Accra, etc.)</li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
                            🎓 Pre-Award &amp; Gala Event Sponsorships
                        </h2>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>EduAid-Africa Expo (October 16, 2025)</li>
                            <li>Pre-Award Panels &amp; Stakeholder Forums (Oct 13–15)</li>
                            <li>NESA Gala Night Awards (October 17, 2025)</li>
                            <li>Red Carpet + Entertainment Segment Sponsor</li>
                            <li>Full Week Program Sponsor (October 13–17, 2025)</li>
                            <li>Award Ceremony Trophy &amp; Merchandise Partner</li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
                            🛍️ Product &amp; Giveaway Sponsorships
                        </h2>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Award Merchandise (T-Shirts, Caps, Trophies, Bags)</li>
                            <li>Award Digital Gift Bag Sponsor (E-books, Vouchers)</li>
                            <li>Gala Guest Gift Pack Sponsor</li>
                            <li>Voting Reward Merchandise (linked to Afri-Gold Coin bonuses)</li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
                            🔁 Other Sponsorship Opportunities
                        </h2>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Sponsor a Custom Award (Create Your Own Theme)</li>
                            <li>Ambassador Program Sponsorship</li>
                            <li>Volunteer Kit &amp; Activation Partner</li>
                            <li>Scholarship Fund Contributor (through EduAid-Africa)</li>
                            <li>Digital Ticketing Sponsor (via GFA Wallet)</li>
                            <li>Merchandise Referral Program Sponsor</li>
                            <li>Local Chapter Sponsor (Sponsor activities in any African chapter)</li>
                            <li>NESA Influencer Marketing Campaign Sponsor</li>
                            <li>Backstage &amp; Production Sponsor</li>
                            <li>AI-powered Judging &amp; Evaluation System Sponsor</li>
                        </ul>
                    </div>
                </div>
                <h3 className="text-md font-semibold mt-6 mb-2">✍️ Ready to Sponsor?</h3>
                <div className="mb-2">
                    <span className="font-semibold">📩 Fill the Sponsor Application Form:</span>
                    <div>
                        <Link href="/sponsor" className="text-blue-600 underline">➡️ Sponsor Now</Link>
                    </div>
                </div>

                <div className="mt-6">
                    <p className="mb-1">📞 <a href="tel:+2348056677770" className="text-blue-600 underline">+234-805-667-7770</a></p>
                    <p className="mb-1">📧 <a href="mailto:sponsor@nesa.africa" className="text-blue-600 underline">sponsor@nesa.africa</a></p>
                    <p className="mb-4">🙌 Let’s Make History Together</p>
                    <p>
                        By sponsoring NESA-Africa 2025, you’re not just supporting an event — you’re backing a movement to transform education access, quality, and celebration across Africa. Join us today!
                    </p>
                </div>
            </>
        </p>
    
        </div>
    )
};

export default SponsorshipPage;