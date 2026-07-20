import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `The terms that govern your use of the ${siteConfig.name} website and services.`,
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="July 2026"
      intro={`These Terms of Service govern your access to and use of the ${siteConfig.name} website and services. By using our website, you agree to these terms. This is a template and should be reviewed by a legal professional before publication.`}
      sections={[
        {
          heading: 'Use of Our Website',
          body: [
            'You may use our website for lawful purposes only. You agree not to misuse the website, interfere with its operation, or attempt to access it using a method other than the interface we provide.',
          ],
        },
        {
          heading: 'Intellectual Property',
          body: [
            'All content on this website — including text, graphics, logos, and the Axiyana brand — is the property of Axiyana Technology Solutions and is protected by applicable intellectual property laws.',
          ],
        },
        {
          heading: 'Services',
          body: [
            'Descriptions of our services and products are provided for general information. Specific engagements are governed by separate written agreements between you and Axiyana Technology Solutions.',
          ],
        },
        {
          heading: 'Limitation of Liability',
          body: [
            'Our website is provided "as is" without warranties of any kind. To the fullest extent permitted by law, we are not liable for any damages arising from your use of the website.',
          ],
        },
        {
          heading: 'Changes to These Terms',
          body: [
            'We may update these terms from time to time. Continued use of the website after changes constitutes acceptance of the revised terms.',
          ],
        },
        {
          heading: 'Contact Us',
          body: [
            `For questions about these Terms of Service, please contact us at ${siteConfig.email}.`,
          ],
        },
      ]}
    />
  );
}
