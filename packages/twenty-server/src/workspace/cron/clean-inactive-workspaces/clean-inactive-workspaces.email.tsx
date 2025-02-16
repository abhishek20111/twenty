import * as React from 'react';

import { HighlightedText } from 'src/emails/components/HighlightedText';
import { MainText } from 'src/emails/components/MainText';
import { Title } from 'src/emails/components/Title';
import { BaseEmail } from 'src/emails/components/BaseEmail';
import { CallToAction } from 'src/emails/components/CallToAction';

type CleanInactiveWorkspaceEmailData = {
  daysLeft: number;
  userName: string;
  workspaceDisplayName: string;
};

export const CleanInactiveWorkspaceEmail = ({
  daysLeft,
  userName,
  workspaceDisplayName,
}: CleanInactiveWorkspaceEmailData) => {
  const dayOrDays = daysLeft > 1 ? 'days' : 'day';
  const remainingDays = daysLeft > 1 ? `${daysLeft} ` : '';

  const helloString = userName?.length > 1 ? `Hello ${userName}` : 'Hello';

  return (
    <BaseEmail>
      <Title value="Inactive Workspace 😴" />
      <HighlightedText value={`${daysLeft} ${dayOrDays} left`} />
      <MainText>
        {helloString},
        <br />
        <br />
        It appears that there has been a period of inactivity on your{' '}
        <b>{workspaceDisplayName}</b> workspace.
        <br />
        <br />
        Please note that the account is due for deactivation soon, and all
        associated data within this workspace will be deleted.
        <br />
        <br />
        No need for concern, though! Simply create or edit a record within the
        next {remainingDays}
        {dayOrDays} to retain access.
      </MainText>
      <CallToAction href="https://app.twenty.com" value="Connect to Twenty" />
    </BaseEmail>
  );
};

export default CleanInactiveWorkspaceEmail;
