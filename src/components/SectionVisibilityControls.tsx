
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useTranslation } from 'react-i18next';

export interface VisibilitySettings {
  showSupport: boolean;
  showExamples?: boolean;
}

interface SectionVisibilityControlsProps {
  settings: VisibilitySettings;
  onChange: (settings: VisibilitySettings) => void;
  supportLabel: string;
}

const SectionVisibilityControls: React.FC<SectionVisibilityControlsProps> = ({
  settings,
  onChange,
  supportLabel
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6 mb-6 bg-muted/40 p-4 rounded-md">
      <h3 className="text-sm font-medium mr-4">{t('general.showHide')}:</h3>
      
      <div className="flex items-center space-x-2">
        <Switch 
          id="show-support" 
          checked={settings.showSupport}
          onCheckedChange={(checked) => onChange({...settings, showSupport: checked})}
          defaultChecked={settings.showSupport}
        />
        <Label htmlFor="show-support">{supportLabel}</Label>
      </div>
      
      {settings.showExamples !== undefined && (
        <div className="flex items-center space-x-2">
          <Switch 
            id="show-examples" 
            checked={settings.showExamples}
            onCheckedChange={(checked) => onChange({...settings, showExamples: checked})}
            defaultChecked={settings.showExamples}
          />
          <Label htmlFor="show-examples">{t('general.examples')}</Label>
        </div>
      )}
    </div>
  );
};

export default SectionVisibilityControls;
