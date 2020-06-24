const mongoose = require('mongoose/browser');
const { ElementDefinitionSlicingDiscriminatorSchema } = require('./ElementDefinitionSlicingDiscriminator');
const { ElementSchema } = require('./Element');
const { SlicingRulesSchema } = require('./SlicingRules');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ElementDefinitionSlicingSchema = ElementSchemaFunction({
   discriminator : [ElementDefinitionSlicingDiscriminatorSchema],
   description : String,
   ordered : Boolean,
   rules : SlicingRulesSchema,
   fhirTitle: { type: String, default: 'ElementDefinitionSlicing' },
});

class ElementDefinitionSlicing extends mongoose.Document {
  constructor(object) {
    super(object, ElementDefinitionSlicingSchema);
    this._type = 'FHIR::ElementDefinitionSlicing';
  }
};


module.exports.ElementDefinitionSlicingSchema = ElementDefinitionSlicingSchema;
module.exports.ElementDefinitionSlicing = ElementDefinitionSlicing;
