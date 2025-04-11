
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { propertyCategories } from '@/data/propertyData';
import { CssProperty } from '@/types/properties';
import { ArrowLeft } from 'lucide-react';
import PropertyExample from '@/components/PropertyExample';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import BrowserIcon from '@/components/BrowserIcon';

const PropertyDetails = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState<CssProperty | null>(null);
  const { t, i18n } = useTranslation(['translation', 'propertyDescriptions']);
  
  useEffect(() => {
    // Find the property in all categories
    for (const category of propertyCategories) {
      const foundProperty = category.properties.find(prop => prop.id === propertyId);
      if (foundProperty) {
        setProperty(foundProperty);
        break;
      }
    }
  }, [propertyId]);

  if (!property) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('general.propertyNotFound')}</h1>
          <Link to="/properties">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t('general.backToProperties')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get translated description or fall back to English
  const getDescription = (propertyId: string, description: string) => {
    const translatedDescription = t(`${propertyId}`, {
      ns: 'propertyDescriptions',
      defaultValue: ''
    });
    
    return translatedDescription || description;
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Link to="/properties" className="text-primary hover:underline flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t('general.backToProperties')}
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-4">
        CSS {t('general.property')} {property.name}
      </h1>
      
      <p className="text-lg mb-8">{getDescription(property.id, property.description)}</p>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">CSS {t('general.syntax')}</h2>
        <div className="bg-muted p-4 rounded-md overflow-x-auto font-mono">
          {property.syntax}
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{t('general.possibleValues')}</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-2 text-left">{t('general.value')}</th>
                <th className="border p-2 text-left">{t('general.description')}</th>
              </tr>
            </thead>
            <tbody>
              {/* For simplicity, we'll extract values from the syntax */}
              {property.syntax.split('|').map((value, index) => {
                // Clean up the value
                const cleanValue = value.trim().replace(/;$/, '');
                // Skip empty values
                if (!cleanValue) return null;
                
                return (
                  <tr key={index} className="border-b">
                    <td className="border p-2 font-mono">{cleanValue}</td>
                    <td className="border p-2">
                      {/* We would need more detailed data for each property value */}
                      {index === 0 ? t('general.defaultValue') : t('general.alternativeValue')}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{t('general.browserSupport')}</h2>
        <div className="flex flex-wrap gap-4 p-4 bg-muted/30 rounded-md">
          {property.browsers.map((browser, i) => (
            <div key={i} className="flex flex-col items-center">
              <BrowserIcon browser={browser} size={32} />
              <span className="mt-2 text-sm">{browser}</span>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{t('general.example')}</h2>
        <p className="mb-4">{t('general.usageExample')}</p>
        <PropertyExample property={property} />
      </section>
    </div>
  );
};

export default PropertyDetails;
