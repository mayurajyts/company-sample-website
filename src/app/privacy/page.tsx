import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="July 2026"
      intro={`This Privacy Policy explains how ${siteConfig.name} ("we", "us", or "our") collects, uses, and safeguards information when you visit our website or engage our services. This is a template and should be reviewed by a legal professional before publication.`}
      sections={[
        {
          heading: 'Information We Collect',
          body: [
            'We may collect information you voluntarily provide through our contact form, such as your name, email address, company, and message. We may also collect anonymous analytics data about how visitors use our website.',
          ],
        },
        {
          heading: 'How We Use Information',
          body: [
            'We use the information you provide to respond to enquiries, deliver our services, and improve your experience. We do not sell your personal information to third parties.',
          ],
        },
        {
          heading: 'Data Security',
          body: [
            'We apply reasonable technical and organizational measures to protect your information against unauthorized access, alteration, or disclosure. No method of transmission over the internet is completely secure, however.',
          ],
        },
        {
          heading: 'Cookies & Analytics',
          body: [
            'Our website may use cookies and privacy-friendly analytics to understand traffic and improve content. You can control cookies through your browser settings.',
          ],
        },
        {
          heading: 'Your Rights',
          body: [
            'You may request access to, correction of, or deletion of your personal data at any time by contacting us. We will respond in accordance with applicable laws.',
          ],
        },
        {
          heading: 'Contact Us',
          body: [
            `If you have questions about this Privacy Policy, please contact us at ${siteConfig.email}.`,
          ],
        },
      ]}
    />
  );
}
