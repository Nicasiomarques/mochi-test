import { getReactHookFormError } from '@utils/helper-functions';
import { FC } from 'react';
import { NestDataObject } from 'react-hook-form';

import { Text, View } from '../../../elements';
import { useI18n } from '../../../modules/hooks';

interface Props {
  name: string;
  errors: NestDataObject<Record<string, unknown>>;
}

const FieldErrorMessage: FC<Props> = ({ errors, name }) => {
  const { t } = useI18n();
  const error = getReactHookFormError({ name, errors });
  return (
    <View margin={['0.5rem', '0']}>
      {errors[name] && (
        <Text red size="1.3rem">
          {t(`common.field.${name}.${error}`)}
        </Text>
      )}
    </View>
  );
};

export default FieldErrorMessage;
