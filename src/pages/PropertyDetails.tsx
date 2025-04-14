
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPropertyDetailsById } from '@/data/propertyDetailsData';
import { PropertyDetails as PropertyDetailsType } from '@/types/propertyValues';
import { Button } from '@/components/ui/button';
import BrowserIcon from '@/components/BrowserIcon';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { propertyCategories } from '@/data/propertyData';
import { CssProperty } from '@/types/properties';
import PropertyExample from '@/components/PropertyExample';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from '@/components/ui/table';

const PropertyDetails = () => {
  const { propertyId } = useParams<{ propertyId: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation(['translation', 'propertyDescriptions', 'propertyValues']);
  const [showExamples, setShowExamples] = useState(true);
  const [showSupport, setShowSupport] = useState(true);
  
  // Find the property in propertyCategories
  const findPropertyInCategories = (): CssProperty | undefined => {
    for (const category of propertyCategories) {
      const property = category.properties.find(p => p.id === propertyId);
      if (property) return property;
    }
    return undefined;
  };

  const property = propertyId ? findPropertyInCategories() : undefined;
  const propertyDetails = propertyId ? getPropertyDetailsById(propertyId) : undefined;
  
  useEffect(() => {
    // If property not found, redirect to properties page
    if (propertyId && !property) {
      navigate('/properties');
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [propertyId, property, navigate]);

  // Get translated description or fall back to English
  const getDescription = (description: string) => {
    const translatedDescription = t(`${propertyId}`, {
      ns: 'propertyDescriptions',
      defaultValue: ''
    });
    
    return translatedDescription || description;
  };

  // Get all possible values for this property from the translation files
  const getPossibleValues = (): {value: string, description: string}[] => {
    if (!propertyId) return [];
    
    const valueEntries = Object.entries(t(`${propertyId}`, { 
      ns: 'propertyValues', 
      returnObjects: true,
      defaultValue: {}
    }));
    
    return valueEntries.map(([value, description]) => ({
      value,
      description: description as string
    }));
  };

  const handleBackClick = () => {
    navigate('/properties', { state: { fromPropertyDetails: true } });
  };

  if (!property) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('general.propertyNotFound')}</h1>
          <Button variant="outline" onClick={handleBackClick}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('general.backToProperties')}
          </Button>
        </div>
      </div>
    );
  }

  const possibleValues = getPossibleValues();

  return (
    <div className="container mx-auto py-8 px-4">
      <Button 
        variant="outline" 
        className="mb-6" 
        onClick={handleBackClick}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t('general.backToProperties')}
      </Button>

      <h1 className="text-3xl font-bold mb-4">
        CSS {t('general.property')} {property.name}
      </h1>
      
      <p className="text-lg mb-8">
        {getDescription(property.description)}
      </p>

      <div className="space-y-8">
        {/* CSS Syntax */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('general.syntax')}</h2>
          <div className="bg-muted p-4 rounded-md font-mono whitespace-pre-wrap overflow-hidden">
            <div className="overflow-hidden text-overflow-ellipsis break-all">{propertyDetails?.syntax || property.syntax}</div>
          </div>
        </section>

        {/* Possible Values */}
        {possibleValues.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('general.possibleValues')}</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('general.value')}</TableHead>
                    <TableHead>{t('general.description')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {possibleValues.map((value, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-mono">{value.value}</TableCell>
                      <TableCell>{value.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>
        )}

        {/* Browser Support */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {t('general.browserSupport')}
            <Button 
              variant="ghost" 
              size="sm" 
              className="ml-2" 
              onClick={() => setShowSupport(!showSupport)}
            >
              {showSupport ? t('general.toggleSupport') : t('general.showHide')}
            </Button>
          </h2>
          {showSupport && (
            <div className="flex flex-wrap gap-4">
              {property.browsers.map((browser, index) => (
                <div key={index} className="flex flex-col items-center">
                  <BrowserIcon browser={browser} />
                  <span className="mt-2 text-sm">{browser}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Example */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {t('general.example')}
            <Button 
              variant="ghost" 
              size="sm" 
              className="ml-2" 
              onClick={() => setShowExamples(!showExamples)}
            >
              {showExamples ? t('general.toggleExamples') : t('general.showHide')}
            </Button>
          </h2>
          {showExamples && (
            <>
              <p className="mb-4">{t('general.exampleDescription')}</p>
              <PropertyExample property={property} />
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default PropertyDetails;
