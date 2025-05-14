import type { AppLogo, StoreLinks } from "./types";

export const appInfo = {
	title: "Great Parent",
	description:
		"Πλοηγηθείτε στην πρώιμη γονεϊκότητα με αυτοπεποίθηση χρησιμοποιώντας το Great Parent, την ολοκληρωμένη εφαρμογή για την παρακολούθηση της ανάπτυξης, την καταγραφή της καθημερινής φροντίδας, την πρόσβαση σε συμβουλές ειδικών και την καταπράυνση του μωρού σας. Είναι σχεδιασμένη για να παρέχει ολοκληρωμένη υποστήριξη και ψυχική ηρεμία, κάνοντας το ταξίδι σας πιο ομαλό και πιο ενημερωμένο.",
	logo: {
		type: "image" as AppLogo["type"],
		src: "favicon.webp",
	},
	storeLinks: {
		apple: "#",
		google: "#",
	} as StoreLinks,
};
