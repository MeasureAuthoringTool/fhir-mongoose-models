const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { ResourceTypeSchema } = require('./ResourceType');
const { SearchComparatorSchema } = require('./SearchComparator');
const { SearchModifierCodeSchema } = require('./SearchModifierCode');
const { SearchParamTypeSchema } = require('./SearchParamType');
const { SearchParameterComponentSchema } = require('./SearchParameterComponent');
const { UsageContextSchema } = require('./UsageContext');
const { XPathUsageTypeSchema } = require('./XPathUsageType');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SearchParameterSchema = DomainResourceSchemaFunction({
   url : String,
   version : String,
   name : String,
   derivedFrom : String,
   status : PublicationStatusSchema,
   experimental : Boolean,
   date : DateTime,
   publisher : String,
   contact : [ContactDetailSchema],
   description : String,
   useContext : [UsageContextSchema],
   jurisdiction : [CodeableConceptSchema],
   purpose : String,
   code : String,
   base : [ResourceTypeSchema],
   type : SearchParamTypeSchema,
   expression : String,
   xpath : String,
   xpathUsage : XPathUsageTypeSchema,
   target : [ResourceTypeSchema],
   multipleOr : Boolean,
   multipleAnd : Boolean,
   comparator : [SearchComparatorSchema],
   modifier : [SearchModifierCodeSchema],
   chain : [String],
   component : [SearchParameterComponentSchema],
   fhirTitle: { type: String, default: 'SearchParameter' },
});

class SearchParameter extends mongoose.Document {
  constructor(object) {
    super(object, SearchParameterSchema);
    this._type = 'FHIR::SearchParameter';
  }
};


module.exports.SearchParameterSchema = SearchParameterSchema;
module.exports.SearchParameter = SearchParameter;
